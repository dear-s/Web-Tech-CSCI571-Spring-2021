package com.example.hw9uscfilms;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.MultiTransformation;
import com.example.hw9uscfilms.fragments.FragmentHome;
import com.smarteist.autoimageslider.SliderViewAdapter;

import java.util.ArrayList;
import java.util.List;

import jp.wasabeef.glide.transformations.BlurTransformation;

import static com.bumptech.glide.request.RequestOptions.bitmapTransform;

public class SliderAdapter extends SliderViewAdapter<SliderAdapter.SliderAdapterViewHolder> {

    // list for storing urls of images.
    private List<SliderData> mSliderItems;

    // Constructor
    public SliderAdapter(FragmentHome context, ArrayList<SliderData> sliderDataArrayList) {
        this.mSliderItems = sliderDataArrayList;
    }

    // We are inflating the slider_layout
    // inside on Create View Holder method.
    @Override
    public SliderAdapterViewHolder onCreateViewHolder(ViewGroup parent) {
        View inflate = LayoutInflater.from(parent.getContext()).inflate(R.layout.slider_layout, null);
        return new SliderAdapterViewHolder(inflate);
    }

    // Inside on bind view holder we will
    // set data to item of Slider View.
    @Override
    public void onBindViewHolder(SliderAdapterViewHolder viewHolder, final int position) {

        final SliderData sliderItem = mSliderItems.get(position);

        // Glide is use to load image from url in your imageview.
        Glide.with(viewHolder.itemView)
                .load(sliderItem.getImgUrl())
                .fitCenter()
                .into(viewHolder.imageViewBackground);

        Glide.with(viewHolder.itemView)
                .load(sliderItem.getImgUrl())
                .transform(new MultiTransformation(new jp.wasabeef.glide.transformations.BlurTransformation(25, 5)))
                .into(viewHolder.imageViewBackground_bg);

        viewHolder.imageViewBackground.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

//                Toast.makeText(v.getContext(), mSliderItems.get(position).getTitle(), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(v.getContext(), DetailsActivity.class);
                intent.putExtra("id", mSliderItems.get(position).getId());
                intent.putExtra("title", mSliderItems.get(position).getTitle());
                intent.putExtra("backdrop_path", mSliderItems.get(position).getBackdrop_path());
                intent.putExtra("poster_path", mSliderItems.get(position).getPoster_path());
                intent.putExtra("media_type", mSliderItems.get(position).getMedia_type());
                v.getContext().startActivity(intent);

            }
        });

    }

    // this method will return the count of our list.
    @Override
    public int getCount() {
        return mSliderItems.size();
    }


    public class SliderAdapterViewHolder extends SliderViewAdapter.ViewHolder {
        // Adapter class for initializing
        // the views of our slider view.
        View itemView;
        ImageView imageViewBackground;
        ImageView imageViewBackground_bg;


        public SliderAdapterViewHolder(View itemView) {
            super(itemView);
            imageViewBackground = itemView.findViewById(R.id.myimage);
            imageViewBackground_bg = itemView.findViewById(R.id.myimage_background);
            this.itemView = itemView;

        }



    }


}