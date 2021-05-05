package com.example.hw9uscfilms;

import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.media.Image;
import android.net.Uri;
import android.util.Log;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.MenuView;
import androidx.preference.PreferenceManager;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import de.hdodenhof.circleimageview.CircleImageView;

import static android.content.Context.MODE_PRIVATE;

public class RecylerViewAdapter extends RecyclerView.Adapter<RecylerViewAdapter.ViewHolder> {

    private static final String TAG = "RecylerViewAdapter";

    // vars
    private ArrayList<String> mImageUrls = new ArrayList<>();

    // top rated --  movies,
    private ArrayList<Long> ids = new ArrayList<>();
    private ArrayList<String> title = new ArrayList<>();
    private ArrayList<String> poster_path = new ArrayList<>();
    private ArrayList<String> media_type = new ArrayList<>();
    private ArrayList<String> backdrop_path;

    private List<WatchlistData> tasklist;


    private Context mContext;


    public RecylerViewAdapter(Context mContext, ArrayList<String> mImageUrls, ArrayList<Long> ids, ArrayList<String> title, ArrayList<String> poster_path, ArrayList<String> backdrop_path, ArrayList<String> media_type) {
        this.mImageUrls = mImageUrls;
        this.mContext = mContext;
        this.ids = ids;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.title = title;
        this.media_type = media_type;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.card_item, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        Glide.with(mContext)
                .asBitmap()
                .load(mImageUrls.get(position))
                .into(holder.image);
        
        holder.image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Toast.makeText(mContext, title.get(position), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(v.getContext(), DetailsActivity.class);
                intent.putExtra("id", ids.get(position)); //you can name the keys whatever you like
                intent.putExtra("title", title.get(position)); //note that all these values have to be primitive (i.e boolean, int, double, String, etc.)
                intent.putExtra("poster_path", poster_path.get(position));
                intent.putExtra("backdrop_path", backdrop_path.get(position));
                intent.putExtra("media_type", media_type.get(position));
                v.getContext().startActivity(intent);
            }
        });


        holder.pop_up_thing.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PopupMenu popup = new PopupMenu(v.getContext(), v);
                popup.getMenuInflater().inflate(R.menu.actions, popup.getMenu());

                // toggle
                List<WatchlistData> new_tasklist = PrefConfig.readListFromPref(mContext);
                WatchlistData new_object = new WatchlistData(ids.get(position), media_type.get(position), poster_path.get(position), backdrop_path.get(position), title.get(position));

                if (new_tasklist == null){
                    new_tasklist = new ArrayList<>();
                }
                else{
                    // check for the presence
                    boolean present = false;
                    for (int j = 0; j < new_tasklist.size(); j++){
                        Long get_id_check = new_tasklist.get(j).getId();
                        String get_mt_check = new_tasklist.get(j).getMedia_type();

                        if (ids.get(position).equals(get_id_check) && media_type.get(position).equals(get_mt_check)){
                            present = true; // now remove it
                        }
                    }
                    if (present){
                        popup.getMenu().findItem(R.id.watchlist).setTitle("Remove from Watchlist");
                    }
                    else{
                        popup.getMenu().findItem(R.id.watchlist).setTitle("Add to Watchlist");
                    }
                }



                popup.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                    @Override
                    public boolean onMenuItemClick(MenuItem item) {
                        switch(item.getItemId()){
                            case R.id.openInTMDB:
                                String tmdb_url = "https://www.themoviedb.org/" + media_type.get(position) + "/" + ids.get(position);
                                Intent i = new Intent(Intent.ACTION_VIEW);
                                i.setData(Uri.parse(tmdb_url));
                                mContext.startActivity(i);
                                break;

                            case R.id.facebook:
                                tmdb_url = "https://www.themoviedb.org/" + media_type.get(position) + "/" + ids.get(position);
                                String fb_url = "https://www.facebook.com/sharer/sharer.php?u=" + tmdb_url;
                                i = new Intent(Intent.ACTION_VIEW);
                                i.setData(Uri.parse(fb_url));
                                mContext.startActivity(i);
                                break;

                            case R.id.twitter:
                                tmdb_url = "https://www.themoviedb.org/" + media_type.get(position) + "/" + ids.get(position);
                                String twitter_url = "https://twitter.com/intent/tweet?text=Check this out! " + tmdb_url;
                                i = new Intent(Intent.ACTION_VIEW);
                                i.setData(Uri.parse(twitter_url));
                                mContext.startActivity(i);
                                break;

                            case R.id.watchlist:

                                // store it to shared preferences
                                Long arg_id = ids.get(position);
                                String arg_pp = poster_path.get(position);
                                String arg_mt = media_type.get(position);
                                String arg_title = title.get(position);
                                String arg_bp = backdrop_path.get(position);

                                tasklist = PrefConfig.readListFromPref(mContext);
                                if (tasklist == null){
                                    tasklist = new ArrayList<>();
                                }
                                WatchlistData watchlistData = new WatchlistData(arg_id, arg_mt, arg_pp, arg_bp, arg_title);

                                // read code
                                SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(mContext.getApplicationContext());
                                String jsonString = pref.getString("list_key", "");
                                Gson gson = new Gson();
                                Type type = new TypeToken<ArrayList<WatchlistData>>() {}.getType();
                                ArrayList<WatchlistData> list = gson.fromJson(jsonString, type);

                                System.out.println("Only list key: " + pref.getAll().get("list_key"));

                                if (list == null){
                                    list = new ArrayList<>();
                                }

                                boolean found = false;
                                for (int j = 0; j < list.size(); j++){
                                    Long get_id_check = list.get(j).getId();
                                    String get_mt_check = list.get(j).getMedia_type();

                                    if (arg_id.equals(get_id_check) && arg_mt.equals(get_mt_check)){
                                        found = true; // now remove it
                                    }
                                }

                                // remove to watchlist
                                if (found){
                                    Toast.makeText(mContext, title.get(position) + " was removed from the Watchlist", Toast.LENGTH_SHORT).show();
                                    // remove function || remove - make new string/arrayList - write again
                                    ArrayList<WatchlistData> new_list = new ArrayList<>();
                                    for(int k = 0; k < list.size(); k++){
                                        Long get_id_check = list.get(k).getId();
                                        String get_mt_check = list.get(k).getMedia_type();
                                        if (arg_id.equals(get_id_check) && arg_mt.equals(get_mt_check)){
                                            ;
                                        }
                                        else{
                                            new_list.add(list.get(k));
                                        }
                                    }
                                    PrefConfig.writeListInPref(mContext, new_list);
                                    item.setTitle("Add to Watchlist");
                                }
                                // add to watchlist
                                else{
                                    Toast.makeText(mContext, title.get(position) + " was added to Watchlist", Toast.LENGTH_SHORT).show();
                                    tasklist.add(watchlistData);
                                    PrefConfig.writeListInPref(mContext, tasklist);
                                    item.setTitle("Remove from Watchlist");
                                }

                        }
                        return false;
                    }
                });
                popup.show();
            }
        });

    }

    @Override
    public int getItemCount() {
        return mImageUrls.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        ImageView image;
        ImageButton pop_up_thing;
//        menu.findItem(R.id.MENU_TITLE).setTitle("MY TITLE");

        public ViewHolder(View itemView){
            super(itemView);
            image = itemView.findViewById(R.id.image_view);
            pop_up_thing = itemView.findViewById(R.id.pop_up_thing);

//            System.out.println("w_option: " + w_option);

        }

    }
}
