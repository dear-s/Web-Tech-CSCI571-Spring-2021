package com.example.hw9uscfilms;

import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.LayoutInflater;
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
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import org.w3c.dom.Text;

import java.util.ArrayList;

import de.hdodenhof.circleimageview.CircleImageView;

public class SearchRecylerViewAdapter extends RecyclerView.Adapter<SearchRecylerViewAdapter.ViewHolder> {

    private static final String TAG = "SearchRecylerViewAdapter";

    // vars
    private ArrayList<String> mImageUrls = new ArrayList<>();

    // top rated --  movies,
    private ArrayList<Long> ids = new ArrayList<>();
    private ArrayList<String> title = new ArrayList<>();
    private ArrayList<Double> rating = new ArrayList<>();
    private ArrayList<String> backdrop_path = new ArrayList<>();
    private ArrayList<String> poster_path = new ArrayList<>();
    private ArrayList<String> media_type = new ArrayList<>();
    private ArrayList<String> year;

    private Context mContext;

    public SearchRecylerViewAdapter(Context mContext, ArrayList<String> mImageUrls, ArrayList<Long> ids, ArrayList<String> title, ArrayList<Double> rating, ArrayList<String> backdrop_path, ArrayList<String> poster_path, ArrayList<String> media_type, ArrayList<String> year) {
        this.mImageUrls = mImageUrls;
        this.mContext = mContext;

        this.ids = ids;
        this.backdrop_path = backdrop_path;
        this.poster_path = poster_path;
        this.title = title;
        this.rating = rating;
        this.media_type = media_type;
        this.year = year;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.search_card_item, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        Glide.with(mContext)
                .asBitmap()
                .load(mImageUrls.get(position))
                .into(holder.image);

        holder.movie_title.setText(title.get(position));
        holder.rating_txt.setText(rating.get(position).toString());

        String medYear = media_type.get(position) + " (" + year.get(position) + ")";
        holder.media_year.setText(medYear);



        holder.image.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Toast.makeText(mContext, title.get(position), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(v.getContext(), DetailsActivity.class);
                intent.putExtra("id", ids.get(position)); //you can name the keys whatever you like
                intent.putExtra("title", title.get(position)); //note that all these values have to be primitive (i.e boolean, int, double, String, etc.)
                intent.putExtra("backdrop_path", backdrop_path.get(position));
                intent.putExtra("poster_path", poster_path.get(position));
                intent.putExtra("media_type", media_type.get(position));
                intent.putExtra("rating", rating.get(position));
                intent.putExtra("year", year.get(position));
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
        TextView media_year, rating_txt, movie_title;

        public ViewHolder(View itemView){
            super(itemView);
            image = itemView.findViewById(R.id.backdrop_image_view);
            media_year = itemView.findViewById(R.id.media_year);
            rating_txt = itemView.findViewById(R.id.rating_txt);
            movie_title = itemView.findViewById(R.id.movie_title);

        }
    }
}
