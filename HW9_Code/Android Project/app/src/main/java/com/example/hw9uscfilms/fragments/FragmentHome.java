package com.example.hw9uscfilms.fragments;

import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;

import androidx.appcompat.view.menu.MenuView;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.PopupMenu;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hw9uscfilms.PrefConfig;
import com.example.hw9uscfilms.R;
import com.example.hw9uscfilms.RecylerViewAdapter;
import com.example.hw9uscfilms.SliderAdapter;
import com.example.hw9uscfilms.SliderData;
import com.example.hw9uscfilms.WatchlistData;
import com.google.android.material.appbar.AppBarLayout;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentHome#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentHome extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public FragmentHome() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment FragmentHome.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentHome newInstance(String param1, String param2) {
        FragmentHome fragment = new FragmentHome();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_home, container, false);

        // toggle feature
        TextView txtMovies = view.findViewById(R.id.txtMovies);
        TextView txtTVShows = view.findViewById(R.id.txtTVShows);
        TextView txtFooter = view.findViewById(R.id.txtFooter);
        MenuView.ItemView watchlist_option = view.findViewById(R.id.watchlist);
        ProgressBar mProgressBar = view.findViewById(R.id.progressbar);
        AppBarLayout main_toolbar = view.findViewById(R.id.main_toolbar);
        TextView txt_loading = view.findViewById(R.id.loading_text);
        FrameLayout home_frame_layout_overlay = view.findViewById(R.id.home_frame_layout_overlay);

        mProgressBar.setVisibility(View.VISIBLE);
        txt_loading.setVisibility(View.VISIBLE);


        // footer redirect
        txtFooter.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String footer_url = "https://www.themoviedb.org/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(footer_url));
                startActivity(i);
            }
        });


        // change this after AWS hosting
        String URL = "https://hw9nodejs-312123.wl.r.appspot.com";
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());

        txtMovies.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                txtMovies.setTextColor(Color.parseColor("#ffffff"));
                txtTVShows.setTextColor(Color.parseColor("#156EB4"));

                StringRequest request = new StringRequest(Request.Method.GET, URL+"/home_page",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);

                                String json = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json); // Convert text to object

                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("currently_playing_movies");

                                    // movie slider
                                    ArrayList<SliderData> sliderDataArrayList = new ArrayList<>();
                                    SliderView sliderView = view.findViewById(R.id.slider);

                                    for(int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        String url_poster_path = objects.getString("poster_path");
                                        long id = objects.getLong("id");
                                        String title = objects.getString("title");
                                        String backdrop_path = objects.getString("backdrop_path");
                                        String poster_path = objects.getString("poster_path");
                                        String media_type = objects.getString("media_type");

                                        sliderDataArrayList.add(new SliderData(url_poster_path, id, title, backdrop_path, poster_path, media_type));
                                    }

                                    SliderAdapter adapter = new SliderAdapter(FragmentHome.this, sliderDataArrayList);
                                    sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);
                                    sliderView.setSliderAdapter(adapter);
                                    sliderView.setScrollTimeInSec(3);
                                    sliderView.setAutoCycle(true);
                                    sliderView.startAutoCycle();

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


                RequestQueue queue2 = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request2 = new StringRequest(Request.Method.GET, URL+"/topMovies",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);


                                String json2 = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json2); // Convert text to object
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("top_rated_movies_section");

                                    // top rated movie slider
                                    final String TAG = "FragmentHome";
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
                                            view.getContext(), LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = view.findViewById(R.id.recyclerView);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                                    recyclerView.setAdapter(adapter);
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



                RequestQueue queue3 = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request3 = new StringRequest(Request.Method.GET, URL+"/popularMovies",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);


                                String json3 = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json3); // Convert text to object
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("popular_movies_section");

                                    // top rated movie slider
                                    final String TAG = "FragmentHome";
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
                                            view.getContext(), LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = view.findViewById(R.id.recyclerView2);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                                    recyclerView.setAdapter(adapter);

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
        });








        // tv toggle button API calls - modified
        txtTVShows.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                txtMovies.setTextColor(Color.parseColor("#156EB4"));
                txtTVShows.setTextColor(Color.parseColor("#ffffff"));

                StringRequest request = new StringRequest(Request.Method.GET, URL+"/trendingTV",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);


                                String json = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json); // Convert text to object
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("trending_tv_shows_section");

                                    // movie slider
                                    ArrayList<SliderData> sliderDataArrayList = new ArrayList<>();
                                    SliderView sliderView = view.findViewById(R.id.slider);

                                    for(int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        String url_poster_path = objects.getString("poster_path");
                                        long id = objects.getLong("id");
                                        String title = objects.getString("title");
                                        String backdrop_path = objects.getString("backdrop_path");
                                        String poster_path = objects.getString("poster_path");
                                        String media_type = objects.getString("media_type");

                                        sliderDataArrayList.add(new SliderData(url_poster_path, id, title, backdrop_path, poster_path, media_type));
                                    }

                                    SliderAdapter adapter = new SliderAdapter(FragmentHome.this, sliderDataArrayList);
                                    sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);
                                    sliderView.setSliderAdapter(adapter);
                                    sliderView.setScrollTimeInSec(3);
                                    sliderView.setAutoCycle(true);
                                    sliderView.startAutoCycle();

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



                RequestQueue queue2 = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request2 = new StringRequest(Request.Method.GET, URL+"/topTV",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);


                                String json2 = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json2); // Convert text to object
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("top_rated_tv_shows_section");

                                    // top rated movie slider
                                    final String TAG = "FragmentHome";
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> backdrop_paths = new ArrayList<String>();
                                    ArrayList<String> media_types = new ArrayList<String>();

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
                                        media_types.add(mt);
                                    }

                                    LinearLayoutManager layoutManager = new LinearLayoutManager(
                                            view.getContext(), LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = view.findViewById(R.id.recyclerView);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_types);
                                    recyclerView.setAdapter(adapter);
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


                RequestQueue queue3 = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request3 = new StringRequest(Request.Method.GET, URL+"/popularTV",
                        new Response.Listener<String>() {
                            @Override
                            public void onResponse(String response) {
//                                mProgressBar.setVisibility(View.INVISIBLE);


                                String json3 = response.toString();
                                JSONObject resultJson = null;
                                try {
                                    resultJson = new JSONObject(json3); // Convert text to object
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                                try {
                                    JSONArray value = resultJson.getJSONArray("popular_tv_shows_section");

                                    // top rated movie slider
                                    final String TAG = "FragmentHome";
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> backdrop_paths = new ArrayList<String>();
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
                                            view.getContext(), LinearLayoutManager.HORIZONTAL, false
                                    );
                                    RecyclerView recyclerView = view.findViewById(R.id.recyclerView2);
                                    recyclerView.setLayoutManager(layoutManager);
                                    RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                                    recyclerView.setAdapter(adapter);

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
        });




        // movies --- by default
        StringRequest request = new StringRequest(Request.Method.GET, URL+"/home_page",
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
//                        mProgressBar.setVisibility(View.INVISIBLE);


                        String json = response.toString();
                        JSONObject resultJson = null;
                        try {
                            resultJson = new JSONObject(json); // Convert text to object
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        try {
                            JSONArray value = resultJson.getJSONArray("currently_playing_movies");

                            // movie slider
                            ArrayList<SliderData> sliderDataArrayList = new ArrayList<>();
                            SliderView sliderView = view.findViewById(R.id.slider);

                            for(int i = 0; i < value.length(); i++){
                                JSONObject objects = value.optJSONObject(i);
                                String url_poster_path = objects.getString("poster_path");
                                long id = objects.getLong("id");
                                String title = objects.getString("title");
                                String backdrop_path = objects.getString("backdrop_path");
                                String poster_path = objects.getString("poster_path");
                                String media_type = objects.getString("media_type");

                                sliderDataArrayList.add(new SliderData(url_poster_path, id, title, backdrop_path, poster_path, media_type));
                            }

                            SliderAdapter adapter = new SliderAdapter(FragmentHome.this, sliderDataArrayList);
                            sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);
                            sliderView.setSliderAdapter(adapter);
                            sliderView.setScrollTimeInSec(3);
                            sliderView.setAutoCycle(true);
                            sliderView.startAutoCycle();

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




        RequestQueue queue2 = Volley.newRequestQueue(getActivity().getApplicationContext());
        StringRequest request2 = new StringRequest(Request.Method.GET, URL+"/topMovies",
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
//                        mProgressBar.setVisibility(View.INVISIBLE);


                        String json2 = response.toString();
                        JSONObject resultJson = null;
                        try {
                            resultJson = new JSONObject(json2); // Convert text to object
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        try {
                            JSONArray value = resultJson.getJSONArray("top_rated_movies_section");

                            // top rated movie slider
                            final String TAG = "FragmentHome";
                            ArrayList<String> mImageUrls = new ArrayList<>();
                            ArrayList<Long> ids = new ArrayList<>();
                            ArrayList<String> titles = new ArrayList<String>();
                            ArrayList<String> poster_paths = new ArrayList<String>();
                            ArrayList<String> backdrop_paths = new ArrayList<String>();
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
                                    view.getContext(), LinearLayoutManager.HORIZONTAL, false
                            );
                            RecyclerView recyclerView = view.findViewById(R.id.recyclerView);
                            recyclerView.setLayoutManager(layoutManager);
                            RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                            recyclerView.setAdapter(adapter);

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



        RequestQueue queue3 = Volley.newRequestQueue(getActivity().getApplicationContext());
        StringRequest request3 = new StringRequest(Request.Method.GET, URL+"/popularMovies",
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        mProgressBar.setVisibility(View.GONE);
                        txt_loading.setVisibility(View.GONE);
                        home_frame_layout_overlay.setVisibility(View.VISIBLE);
                        main_toolbar.setVisibility(View.VISIBLE);

                        String json3 = response.toString();
                        JSONObject resultJson = null;
                        try {
                            resultJson = new JSONObject(json3); // Convert text to object
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        try {
                            JSONArray value = resultJson.getJSONArray("popular_movies_section");

                            // top rated movie slider
                            ArrayList<String> mImageUrls = new ArrayList<>();
                            ArrayList<Long> ids = new ArrayList<>();
                            ArrayList<String> titles = new ArrayList<String>();
                            ArrayList<String> poster_paths = new ArrayList<String>();
                            ArrayList<String> backdrop_paths = new ArrayList<String>();
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
                                    view.getContext(), LinearLayoutManager.HORIZONTAL, false
                            );
                            RecyclerView recyclerView = view.findViewById(R.id.recyclerView2);
                            recyclerView.setLayoutManager(layoutManager);
                            RecylerViewAdapter adapter = new RecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, poster_paths, backdrop_paths, media_type);
                            recyclerView.setAdapter(adapter);

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


        // Inflate the layout for this fragment
        return view;

    }
}