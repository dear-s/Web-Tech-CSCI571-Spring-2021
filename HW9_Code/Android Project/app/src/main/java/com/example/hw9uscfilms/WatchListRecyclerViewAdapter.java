package com.example.hw9uscfilms;

import android.app.Activity;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.view.menu.MenuView;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.preference.PreferenceManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.hw9uscfilms.fragments.FragmentWatchlist;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class WatchListRecyclerViewAdapter extends RecyclerView.Adapter<WatchListRecyclerViewAdapter.MyViewHolder> {

    private Context mContext;
    private List<WatchlistData> mData;

    // constructor
    public WatchListRecyclerViewAdapter(Context mContext, List<WatchlistData> mData) {
        this.mContext = mContext;
        this.mData = mData;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view;
        LayoutInflater mInflater = LayoutInflater.from(mContext);
        view = mInflater.inflate(R.layout.watchlist_card_item,parent,false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        String get_mediaString = mData.get(position).getMedia_type();
        if (get_mediaString.equals("movie")){
            holder.myTextView.setText("Movie");
        }
        else{
            holder.myTextView.setText("TV");
        }

        Glide.with(mContext)
                .asBitmap()
                .load(mData.get(position).getPoster_path())
                .into(holder.mImage);

        holder.minus_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(mContext, mData.get(position).getTitle()+" was removed from favourites", Toast.LENGTH_SHORT).show();

                // remove this entry from the watchlist - remove code here
                SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(mContext.getApplicationContext());
                String jsonString = pref.getString("list_key", "");
                Gson gson = new Gson();
                Type type = new TypeToken<ArrayList<WatchlistData>>() {}.getType();
                ArrayList<WatchlistData> list = gson.fromJson(jsonString, type);
                
                ArrayList<WatchlistData> new_list = new ArrayList<>();
                for(int k = 0; k < list.size(); k++){
                    Long get_id_check = list.get(k).getId();
                    String get_mt_check = list.get(k).getMedia_type();
                    if (mData.get(position).getId() == (get_id_check) && mData.get(position).getMedia_type().equals(get_mt_check)){
                        ;
                    }
                    else{
                        new_list.add(list.get(k));
                    }
                }
                PrefConfig.writeListInPref(mContext, new_list);

                // removed now -- refresh the fragment again for live deletion
                holder.mImage.setVisibility(View.GONE);
                holder.minus_button.setVisibility(View.GONE);
                holder.myTextView.setVisibility(View.GONE);
                holder.itemView.setVisibility(View.GONE);


                FragmentTransaction tr = ((AppCompatActivity)mContext).getSupportFragmentManager().beginTransaction();
                Fragment frag = new FragmentWatchlist();
                tr.replace(R.id.frame_layout, frag);
                tr.commit();

            }
        });


        holder.mImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Toast.makeText(mContext, mData.get(position).getTitle(), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(v.getContext(), DetailsActivity.class);
                intent.putExtra("id", mData.get(position).getId()); //you can name the keys whatever you like
                intent.putExtra("title", mData.get(position).getTitle()); //note that all these values have to be primitive (i.e boolean, int, double, String, etc.)
                intent.putExtra("backdrop_path", mData.get(position).getBackdrop_path());
                intent.putExtra("media_type", mData.get(position).getMedia_type());

                v.getContext().startActivity(intent);
            }
        });

    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder{

        ImageView mImage;
        TextView myTextView;
        ImageButton minus_button;

        Button btn_watchlist;

        public MyViewHolder(View itemView){
            super(itemView);

            mImage = itemView.findViewById(R.id.watchlist_image_view);
            myTextView = itemView.findViewById(R.id.txtWatchlist_mediaType);
            minus_button = itemView.findViewById(R.id.minus_button);

            btn_watchlist = itemView.findViewById(R.id.watchlist);
        }
    }
}
