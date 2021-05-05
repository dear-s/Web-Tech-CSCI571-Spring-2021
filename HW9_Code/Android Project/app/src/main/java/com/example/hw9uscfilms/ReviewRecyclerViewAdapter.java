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
import androidx.cardview.widget.CardView;
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

public class ReviewRecyclerViewAdapter extends RecyclerView.Adapter<ReviewRecyclerViewAdapter.MyViewHolder> {

    private Context mContext;
    private List<ReviewData> mData;

    // constructor
    public ReviewRecyclerViewAdapter(Context mContext, List<ReviewData> mData) {
        this.mContext = mContext;
        this.mData = mData;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view;
        LayoutInflater mInflater = LayoutInflater.from(mContext);
        view = mInflater.inflate(R.layout.review_card_item,parent,false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        String get_username = mData.get(position).getUsername();
        int rate = mData.get(position).getRating();
        String date = mData.get(position).getDate();
        String content = mData.get(position).getContent();

        String first_text = "by " + get_username + " on " + date;

        holder.first.setText(first_text);
        holder.second.setText(rate + "/5");
        holder.third.setText(content);

        // click listener on cardView
        holder.cardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Toast.makeText(mContext, mData.get(position).getTitle(), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(v.getContext(), ReviewActivity.class);
                intent.putExtra("rating", mData.get(position).getRating()); //you can name the keys whatever you like
                intent.putExtra("username", mData.get(position).getUsername()); //note that all these values have to be primitive (i.e boolean, int, double, String, etc.)
                intent.putExtra("date", mData.get(position).getDate());
                intent.putExtra("content", mData.get(position).getContent());
                v.getContext().startActivity(intent);
            }
        });

    }

    @Override
    public int getItemCount() {
        return mData.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder{

        TextView first, second, third;
        CardView cardView;

        public MyViewHolder(View itemView){
            super(itemView);

            first = itemView.findViewById(R.id.review_first);
            second = itemView.findViewById(R.id.review_second);
            third = itemView.findViewById(R.id.review_third);

            cardView = itemView.findViewById(R.id.review_card_view);

        }
    }
}
