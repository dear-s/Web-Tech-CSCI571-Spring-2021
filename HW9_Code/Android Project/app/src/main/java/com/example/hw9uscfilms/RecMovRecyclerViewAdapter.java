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

class RecMovRecylerViewAdapter extends RecyclerView.Adapter<RecMovRecylerViewAdapter.ViewHolder> {

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


    public RecMovRecylerViewAdapter(Context mContext, ArrayList<String> mImageUrls, ArrayList<Long> ids, ArrayList<String> title, ArrayList<String> poster_path, ArrayList<String> backdrop_path, ArrayList<String> media_type) {
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
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.rec_mov_card_item, parent, false);
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


    }


    @Override
    public int getItemCount() {
        return mImageUrls.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        ImageView image;

        public ViewHolder(View itemView){
            super(itemView);
            image = itemView.findViewById(R.id.rev_image_view);
        }

    }
}
