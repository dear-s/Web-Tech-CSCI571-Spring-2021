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

public class CastRecyclerViewAdapter extends RecyclerView.Adapter<CastRecyclerViewAdapter.MyViewHolder> {

    private Context mContext;
    private List<CastData> mData;

    // constructor
    public CastRecyclerViewAdapter(Context mContext, List<CastData> mData) {
        this.mContext = mContext;
        this.mData = mData;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view;
        LayoutInflater mInflater = LayoutInflater.from(mContext);
        view = mInflater.inflate(R.layout.cast_card_item,parent,false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        holder.myTextView.setText(mData.get(position).getName());

        Glide.with(mContext)
                .asBitmap()
                .load(mData.get(position).getFull_pp())
                .into(holder.mImage);


//
//        holder.mImage.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                Toast.makeText(mContext, mData.get(position).getTitle(), Toast.LENGTH_SHORT).show();
//
//                Intent intent = new Intent(v.getContext(), DetailsActivity.class);
//                intent.putExtra("id", mData.get(position).getId()); //you can name the keys whatever you like
//                intent.putExtra("title", mData.get(position).getTitle()); //note that all these values have to be primitive (i.e boolean, int, double, String, etc.)
//                intent.putExtra("backdrop_path", mData.get(position).getBackdrop_path());
//                intent.putExtra("media_type", mData.get(position).getMedia_type());
//
//                v.getContext().startActivity(intent);
//            }
//        });

    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder{

        ImageView mImage;
        TextView myTextView;


        public MyViewHolder(View itemView){
            super(itemView);

            mImage = itemView.findViewById(R.id.cast_card_image);
            myTextView = itemView.findViewById(R.id.cast_name);
        }
    }
}
