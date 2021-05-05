package com.example.hw9uscfilms;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.preference.PreferenceManager;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.os.StrictMode;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hw9uscfilms.fragments.FragmentHome;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class DetailsActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        if (android.os.Build.VERSION.SDK_INT > 9) {
            StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
            StrictMode.setThreadPolicy(policy);
        }
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);

        ProgressBar mProgressBar = findViewById(R.id.progressbar);
        TextView txt_loading = findViewById(R.id.loading_text);
        LinearLayout home_frame_layout_overlay = findViewById(R.id.home_frame_layout_overlay);

        mProgressBar.setVisibility(View.VISIBLE);
        txt_loading.setVisibility(View.VISIBLE);

        // get mediaType and then call /detailsPage or /detailsPage2
        // no trailer - use 'backdrop_path'

        // retrieve
        Long id = getIntent().getExtras().getLong("id");
//        System.out.println("DA, id:  " + id);

        String title = getIntent().getExtras().getString("title");
//        System.out.println("DA title: " + title);

        String media_type = getIntent().getExtras().getString("media_type");
//        System.out.println("DA media_type: " + media_type);

        String backdrop_path = getIntent().getExtras().getString("backdrop_path");
//        System.out.println("DA backdrop_path: " + backdrop_path);

        String poster_path = getIntent().getExtras().getString("poster_path");
//        System.out.println("DA poster_path: " + poster_path);

        if (media_type.equals("movie")){
            System.out.println("entering movie details activity");
            // movie - detailsPage
            String URL = "https://hw9nodejs-312123.wl.r.appspot.com";
            RequestQueue queue = Volley.newRequestQueue(getApplicationContext());
            StringRequest request = new StringRequest(Request.Method.GET, URL+"/detailsPage/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("movies_video_endpoint");
//                                System.out.println("value: " + value);

                                // handle youtube vs backdrop_path
                                if (value.length() == 0){
                                    // backdrop_path
                                    YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                                    youTubePlayerView.setVisibility(View.GONE);

                                    ImageView bp_view = findViewById(R.id.backdrop_view);
                                    bp_view.setImageBitmap(getBitmapFromURL(backdrop_path));
                                    bp_view.setVisibility(View.VISIBLE);

                                }
                                else {
                                    JSONObject objects = value.optJSONObject(0);
                                    String key = objects.getString("key");

                                    ImageView bp_view = findViewById(R.id.backdrop_view);
                                    bp_view.setVisibility(View.GONE);

                                    // youtube video player
                                    YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                                    getLifecycle().addObserver(youTubePlayerView);

                                    youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                                        @Override
                                        public void onReady(@NonNull YouTubePlayer youTubePlayer) {
                                            String videoId = key;
                                            System.out.println("new key for youtube video: " + key);
                                            youTubePlayer.cueVideo(videoId, 0);
                                        }
                                    });
                                }

                                // rest of the screen/code

                                // setting Title of the movie
                                TextView title_detailsActivity = findViewById(R.id.title_detailsActivity);
                                title_detailsActivity.setText(title);


                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                            try {
                                JSONArray value = resultJson.getJSONArray("movies_details_endpoint");
//                                System.out.println("value: " + value);
                                JSONObject objects = value.optJSONObject(0);

                                // setting overview
                                String overview = objects.getString("overview");
                                TextView txt_overview = findViewById(R.id.overview_detailsActivity);
                                txt_overview.setText(overview);

                                // setting genres
                                String genres = objects.getString("genres");
                                TextView txt_genres = findViewById(R.id.genres_detailsActivity);
                                txt_genres.setText(genres);

                                // setting year
                                String release_date = objects.getString("release_date");
                                String get_year  = release_date.substring(0,4);
                                TextView txt_year = findViewById(R.id.year_detailsActivity);
                                txt_year.setText(get_year);

                                // setting up icons - add/remove from watchlist
                                ImageButton plus_icon, minus_icon;
                                plus_icon = findViewById(R.id.plus_icon);
                                minus_icon = findViewById(R.id.minus_icon);

                                // check if value is present in watchlist
                                List<WatchlistData> new_tasklist = PrefConfig.readListFromPref(DetailsActivity.this);
                                if (new_tasklist == null){
                                    new_tasklist = new ArrayList<>();
                                }
                                else{
                                    // check for the presence
                                    boolean present = false;
                                    for (int j = 0; j < new_tasklist.size(); j++){
                                        Long get_id_check = new_tasklist.get(j).getId();
                                        String get_mt_check = new_tasklist.get(j).getMedia_type();

                                        if (id.equals(get_id_check) && get_mt_check.equals("movie")){
                                            present = true; // show minus icon
                                        }
                                    }
                                    if (present){
                                        //minus icon
                                        plus_icon.setVisibility(View.GONE);
                                        minus_icon.setVisibility(View.VISIBLE);
                                    }
                                    else{
                                        // plus icon
                                        plus_icon.setVisibility(View.VISIBLE);
                                        minus_icon.setVisibility(View.GONE);
                                    }
                                }

                                // onClick listeners - plus/minus icons
                                plus_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        // add to watchlist and then show minus_icon
                                        Toast.makeText(DetailsActivity.this, title + " was added to Watchlist", Toast.LENGTH_SHORT).show();
                                        List<WatchlistData> tasklist = PrefConfig.readListFromPref(DetailsActivity.this);
                                        WatchlistData watchlistData = new WatchlistData(id, "movie", poster_path, backdrop_path, title);
                                        tasklist.add(watchlistData);
                                        PrefConfig.writeListInPref(DetailsActivity.this, tasklist);

                                        plus_icon.setVisibility(View.GONE);
                                        minus_icon.setVisibility(View.VISIBLE);
                                    }
                                });

                                minus_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        // remove from watchlist and then show plus_icon
                                        Toast.makeText(DetailsActivity.this, title + " was removed from the Watchlist", Toast.LENGTH_SHORT).show();
                                        SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(DetailsActivity.this.getApplicationContext());
                                        String jsonString = pref.getString("list_key", "");
                                        Gson gson = new Gson();
                                        Type type = new TypeToken<ArrayList<WatchlistData>>() {}.getType();
                                        ArrayList<WatchlistData> list = gson.fromJson(jsonString, type);
                                        ArrayList<WatchlistData> new_list = new ArrayList<>();
                                        for(int k = 0; k < list.size(); k++){
                                            Long get_id_check = list.get(k).getId();
                                            String get_mt_check = list.get(k).getMedia_type();
                                            if (id.equals(get_id_check) && get_mt_check.equals("movie")){
                                                ;
                                            }
                                            else{
                                                new_list.add(list.get(k));
                                            }
                                        }
                                        PrefConfig.writeListInPref(DetailsActivity.this, new_list);

                                        plus_icon.setVisibility(View.VISIBLE);
                                        minus_icon.setVisibility(View.GONE);
                                    }
                                });

                                // setting up Facebook share icon
                                ImageButton fb_icon = findViewById(R.id.fb_detailsActivity);
                                fb_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        String tmdb_url = "https://www.themoviedb.org/" + "movie" + "/" + id;
                                        String fb_url = "https://www.facebook.com/sharer/sharer.php?u=" + tmdb_url;
                                        Intent i = new Intent(Intent.ACTION_VIEW);
                                        i.setData(Uri.parse(fb_url));
                                        DetailsActivity.this.startActivity(i);
                                    }
                                });

                                // setting up Twitter share icon
                                ImageButton twitter_icon = findViewById(R.id.twitter_detailsActivity);
                                twitter_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        String tmdb_url = "https://www.themoviedb.org/" + "movie" + "/" + id;
                                        String twitter_url = "https://twitter.com/intent/tweet?text=Check this out! " + tmdb_url;
                                        Intent i = new Intent(Intent.ACTION_VIEW);
                                        i.setData(Uri.parse(twitter_url));
                                        DetailsActivity.this.startActivity(i);
                                    }
                                });

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                            // casts - maximum 6
                            try {
                                JSONArray value = resultJson.getJSONArray("movie_cast_endpoint");
//                                System.out.println("cast jsonArray: " + value);

                                if (value.length() == 0){
                                    TextView cast_header = findViewById(R.id.cast_header);
                                    cast_header.setVisibility(View.GONE);
                                }
                                else{
                                    // make cast cards

                                    // make card grid
                                    ArrayList<CastData> new_cast_list = new ArrayList<>();

                                    for (int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        new_cast_list.add(new CastData(objects.getString("full_pp"), objects.getString("name")));
                                    }

                                    RecyclerView watch_rv = findViewById(R.id.cast_recyclerView);
                                    CastRecyclerViewAdapter myAdapter = new CastRecyclerViewAdapter(DetailsActivity.this, new_cast_list);
                                    watch_rv.setLayoutManager(new GridLayoutManager(DetailsActivity.this, 3));
                                    watch_rv.setAdapter(myAdapter);
                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue.add(request);



            // movies reviews - api call
            RequestQueue queue2 = Volley.newRequestQueue(getApplicationContext());
            StringRequest request2 = new StringRequest(Request.Method.GET, URL+"/movieReviews/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("review_list");
//                                System.out.println("value: " + value);


                                if (value.length() == 0){
                                    TextView review_header = findViewById(R.id.review_header);
                                    review_header.setVisibility(View.GONE);
                                }
                                else {
                                    // make review cards - max 3
                                    ArrayList<ReviewData> reviews_list = new ArrayList<>();

                                    for (int j = 0; j < value.length(); j++){
                                        JSONObject objects = value.optJSONObject(j);
                                        reviews_list.add(new ReviewData(objects.getInt("rating"), objects.getString("author"), objects.getString("created_date"), objects.getString("content")));
                                    }

                                    RecyclerView watch_rv = findViewById(R.id.reviews_recyclerView);
                                    ReviewRecyclerViewAdapter myAdapter = new ReviewRecyclerViewAdapter(DetailsActivity.this, reviews_list);
                                    watch_rv.setLayoutManager(new GridLayoutManager(DetailsActivity.this, 1));
                                    watch_rv.setAdapter(myAdapter);

                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue2.add(request2);


            // recommended Movies API
            RequestQueue queue3 = Volley.newRequestQueue(getApplicationContext());
            StringRequest request3 = new StringRequest(Request.Method.GET, URL+"/recMovies/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            mProgressBar.setVisibility(View.GONE);
                            txt_loading.setVisibility(View.GONE);
                            home_frame_layout_overlay.setVisibility(View.VISIBLE);

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("recMov");
                                System.out.println("value: " + value);

                                if (value.length() == 0){
                                    TextView rec_header = findViewById(R.id.rec_header);
                                    rec_header.setVisibility(View.GONE);
                                }
                                else {
                                    // make horizontal recommended carousel
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> backdrop_paths = new ArrayList<>();
                                    ArrayList<String> media_type = new ArrayList<String>();

                                    for(int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        String url_poster_path = objects.getString("poster_path");
                                        Long id = objects.getLong("id");
                                        String title = objects.getString("title");
                                        String pp = objects.getString("poster_path");
                                        String bp = objects.getString("backdrop_path");
                                        String mt = objects.getString("media_type");

                                        mImageUrls.add(url_poster_path);
                                        ids.add(id);
                                        titles.add(title);
                                        poster_paths.add(pp);
                                        backdrop_paths.add(bp);
                                        media_type.add(mt);
                                    }

                                    LinearLayoutManager layoutManager = new LinearLayoutManager(
                                            DetailsActivity.this, LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = findViewById(R.id.recMovies_recyclerView);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecMovRecylerViewAdapter adapter = new RecMovRecylerViewAdapter(DetailsActivity.this, mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                                    recyclerView.setAdapter(adapter);
                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue3.add(request3);

        }





        else {
            // TV - detailsPage2
            System.out.println("entering tv details activity");
            String URL = "https://hw9nodejs-312123.wl.r.appspot.com";
            RequestQueue queue = Volley.newRequestQueue(getApplicationContext());
            StringRequest request = new StringRequest(Request.Method.GET, URL+"/detailsPage2/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("tv_video_endpoint");
//                                System.out.println("value: " + value);

                                // handle youtube vs backdrop_path
                                if (value.length() == 0){
                                    // backdrop_path
                                    YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                                    youTubePlayerView.setVisibility(View.GONE);

                                    ImageView bp_view = findViewById(R.id.backdrop_view);
                                    bp_view.setImageBitmap(getBitmapFromURL(backdrop_path));
                                    bp_view.setVisibility(View.VISIBLE);

                                }
                                else {
                                    JSONObject objects = value.optJSONObject(0);
                                    String key = objects.getString("key");

                                    ImageView bp_view = findViewById(R.id.backdrop_view);
                                    bp_view.setVisibility(View.GONE);

                                    // youtube video player
                                    YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
                                    getLifecycle().addObserver(youTubePlayerView);

                                    youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                                        @Override
                                        public void onReady(@NonNull YouTubePlayer youTubePlayer) {
                                            String videoId = key;
                                            System.out.println("new key for youtube video: " + key);
                                            youTubePlayer.cueVideo(videoId, 0);
                                        }
                                    });
                                }

                                // rest of the screen/code

                                // setting Title of the movie
                                TextView title_detailsActivity = findViewById(R.id.title_detailsActivity);
                                title_detailsActivity.setText(title);


                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                            try {
                                JSONArray value = resultJson.getJSONArray("tv_details_endpoint");
//                                System.out.println("value: " + value);
                                JSONObject objects = value.optJSONObject(0);

                                // setting overview
                                String overview = objects.getString("overview");
                                TextView txt_overview = findViewById(R.id.overview_detailsActivity);
                                txt_overview.setText(overview);

                                // setting genres
                                String genres = objects.getString("genres");
                                TextView txt_genres = findViewById(R.id.genres_detailsActivity);
                                txt_genres.setText(genres);

                                // setting year
                                String release_date = objects.getString("release_date");
                                String get_year  = release_date.substring(0,4);
                                TextView txt_year = findViewById(R.id.year_detailsActivity);
                                txt_year.setText(get_year);

                                // setting up icons - add/remove from watchlist
                                ImageButton plus_icon, minus_icon;
                                plus_icon = findViewById(R.id.plus_icon);
                                minus_icon = findViewById(R.id.minus_icon);

                                // check if value is present in watchlist
                                List<WatchlistData> new_tasklist = PrefConfig.readListFromPref(DetailsActivity.this);
                                if (new_tasklist == null){
                                    new_tasklist = new ArrayList<>();
                                }
                                else{
                                    // check for the presence
                                    boolean present = false;
                                    for (int j = 0; j < new_tasklist.size(); j++){
                                        Long get_id_check = new_tasklist.get(j).getId();
                                        String get_mt_check = new_tasklist.get(j).getMedia_type();

                                        if (id.equals(get_id_check) && get_mt_check.equals("tv")){
                                            present = true; // show minus icon
                                        }
                                    }
                                    if (present){
                                        //minus icon
                                        plus_icon.setVisibility(View.GONE);
                                        minus_icon.setVisibility(View.VISIBLE);
                                    }
                                    else{
                                        // plus icon
                                        plus_icon.setVisibility(View.VISIBLE);
                                        minus_icon.setVisibility(View.GONE);
                                    }
                                }

                                // onClick listeners - plus/minus icons
                                plus_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        // add to watchlist and then show minus_icon
                                        Toast.makeText(DetailsActivity.this, title + " was added to Watchlist", Toast.LENGTH_SHORT).show();
                                        List<WatchlistData> tasklist = PrefConfig.readListFromPref(DetailsActivity.this);
                                        WatchlistData watchlistData = new WatchlistData(id, "tv", poster_path, backdrop_path, title);
                                        tasklist.add(watchlistData);
                                        PrefConfig.writeListInPref(DetailsActivity.this, tasklist);

                                        plus_icon.setVisibility(View.GONE);
                                        minus_icon.setVisibility(View.VISIBLE);
                                    }
                                });

                                minus_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        // remove from watchlist and then show plus_icon
                                        Toast.makeText(DetailsActivity.this, title + " was removed from the Watchlist", Toast.LENGTH_SHORT).show();
                                        SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(DetailsActivity.this.getApplicationContext());
                                        String jsonString = pref.getString("list_key", "");
                                        Gson gson = new Gson();
                                        Type type = new TypeToken<ArrayList<WatchlistData>>() {}.getType();
                                        ArrayList<WatchlistData> list = gson.fromJson(jsonString, type);
                                        ArrayList<WatchlistData> new_list = new ArrayList<>();
                                        for(int k = 0; k < list.size(); k++){
                                            Long get_id_check = list.get(k).getId();
                                            String get_mt_check = list.get(k).getMedia_type();
                                            if (id.equals(get_id_check) && get_mt_check.equals("tv")){
                                                ;
                                            }
                                            else{
                                                new_list.add(list.get(k));
                                            }
                                        }
                                        PrefConfig.writeListInPref(DetailsActivity.this, new_list);

                                        plus_icon.setVisibility(View.VISIBLE);
                                        minus_icon.setVisibility(View.GONE);
                                    }
                                });

                                // setting up Facebook share icon
                                ImageButton fb_icon = findViewById(R.id.fb_detailsActivity);
                                fb_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        String tmdb_url = "https://www.themoviedb.org/" + "tv" + "/" + id;
                                        String fb_url = "https://www.facebook.com/sharer/sharer.php?u=" + tmdb_url;
                                        Intent i = new Intent(Intent.ACTION_VIEW);
                                        i.setData(Uri.parse(fb_url));
                                        DetailsActivity.this.startActivity(i);
                                    }
                                });

                                // setting up Twitter share icon
                                ImageButton twitter_icon = findViewById(R.id.twitter_detailsActivity);
                                twitter_icon.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View v) {
                                        String tmdb_url = "https://www.themoviedb.org/" + "tv" + "/" + id;
                                        String twitter_url = "https://twitter.com/intent/tweet?text=Check this out! " + tmdb_url;
                                        Intent i = new Intent(Intent.ACTION_VIEW);
                                        i.setData(Uri.parse(twitter_url));
                                        DetailsActivity.this.startActivity(i);
                                    }
                                });

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                            // casts - maximum 6
                            try {
                                JSONArray value = resultJson.getJSONArray("tv_cast_endpoint");
//                                System.out.println("cast jsonArray: " + value);

                                if (value.length() == 0){
                                    TextView cast_header = findViewById(R.id.cast_header);
                                    cast_header.setVisibility(View.GONE);
                                }
                                else{
                                    // make cast cards

                                    // make card grid
                                    ArrayList<CastData> new_cast_list = new ArrayList<>();

                                    for (int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        new_cast_list.add(new CastData(objects.getString("full_pp"), objects.getString("name")));
                                    }

                                    RecyclerView watch_rv = findViewById(R.id.cast_recyclerView);
                                    CastRecyclerViewAdapter myAdapter = new CastRecyclerViewAdapter(DetailsActivity.this, new_cast_list);
                                    watch_rv.setLayoutManager(new GridLayoutManager(DetailsActivity.this, 3));
                                    watch_rv.setAdapter(myAdapter);
                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue.add(request);



            // tv reviews - api call
            RequestQueue queue2 = Volley.newRequestQueue(getApplicationContext());
            StringRequest request2 = new StringRequest(Request.Method.GET, URL+"/tvReviews/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("review_list");
//                                System.out.println("value: " + value);

                                if (value.length() == 0){
                                    TextView review_header = findViewById(R.id.review_header);
                                    review_header.setVisibility(View.GONE);
                                }
                                else {
                                    // make review cards - max 3
                                    ArrayList<ReviewData> reviews_list = new ArrayList<>();

                                    for (int j = 0; j < value.length(); j++){
                                        JSONObject objects = value.optJSONObject(j);
                                        reviews_list.add(new ReviewData(objects.getInt("rating"), objects.getString("author"), objects.getString("created_date"), objects.getString("content")));
                                    }

                                    RecyclerView watch_rv = findViewById(R.id.reviews_recyclerView);
                                    ReviewRecyclerViewAdapter myAdapter = new ReviewRecyclerViewAdapter(DetailsActivity.this, reviews_list);
                                    watch_rv.setLayoutManager(new GridLayoutManager(DetailsActivity.this, 1));
                                    watch_rv.setAdapter(myAdapter);

                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue2.add(request2);


            // recommended Movies API
            RequestQueue queue3 = Volley.newRequestQueue(getApplicationContext());
            StringRequest request3 = new StringRequest(Request.Method.GET, URL+"/recTv/" + id,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            mProgressBar.setVisibility(View.GONE);
                            txt_loading.setVisibility(View.GONE);
                            home_frame_layout_overlay.setVisibility(View.VISIBLE);

                            String json = response.toString();
                            JSONObject resultJson = null;
                            try {
                                resultJson = new JSONObject(json); // Convert text to object

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                            try {
                                JSONArray value = resultJson.getJSONArray("recTv");
//                                System.out.println("value: " + value);

                                if (value.length() == 0){
                                    TextView rec_header = findViewById(R.id.rec_header);
                                    rec_header.setVisibility(View.GONE);
                                }
                                else {
                                    // make horizontal recommended carousel
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> backdrop_paths = new ArrayList<>();
                                    ArrayList<String> media_type = new ArrayList<String>();

                                    for(int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        String url_poster_path = objects.getString("poster_path");
                                        Long id = objects.getLong("id");
                                        String title = objects.getString("title");
                                        String pp = objects.getString("poster_path");
                                        String bp = objects.getString("backdrop_path");
                                        String mt = objects.getString("media_type");

                                        mImageUrls.add(url_poster_path);
                                        ids.add(id);
                                        titles.add(title);
                                        poster_paths.add(pp);
                                        backdrop_paths.add(bp);
                                        media_type.add(mt);
                                    }

                                    LinearLayoutManager layoutManager = new LinearLayoutManager(
                                            DetailsActivity.this, LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = findViewById(R.id.recMovies_recyclerView);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecMovRecylerViewAdapter adapter = new RecMovRecylerViewAdapter(DetailsActivity.this, mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                                    recyclerView.setAdapter(adapter);
                                }

                            } catch (JSONException e) {
                                e.printStackTrace();
                            }

                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    Log.d("error: ", error.toString());
                }
            });
            queue3.add(request3);

        }
    }

    public static Bitmap getBitmapFromURL(String src) {
        try {
            Log.e("src",src);
            URL url = new URL(src);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            InputStream input = connection.getInputStream();
            Bitmap myBitmap = BitmapFactory.decodeStream(input);
            Log.e("Bitmap","returned");
            return myBitmap;
        } catch (IOException e) {
            e.printStackTrace();
            Log.e("Exception",e.getMessage());
            return null;
        }
    }

}