package com.example.hw9uscfilms.fragments;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.preference.PreferenceManager;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.hw9uscfilms.DetailsActivity;
import com.example.hw9uscfilms.PrefConfig;
import com.example.hw9uscfilms.R;
import com.example.hw9uscfilms.WatchListRecyclerViewAdapter;
import com.example.hw9uscfilms.WatchlistData;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentWatchlist#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentWatchlist extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public FragmentWatchlist() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment FragmentWatchlist.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentWatchlist newInstance(String param1, String param2) {
        FragmentWatchlist fragment = new FragmentWatchlist();
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

        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_watchlist, container, false);

        // code - watchlist - gridLayout and drag/drop feature
        List<WatchlistData> new_tasklist = PrefConfig.readListFromPref(getContext());

        System.out.println("new_tasklist: " + new_tasklist);
        if (new_tasklist==null || new_tasklist.size() == 0){
            // textview
            TextView nothing_saved = view.findViewById(R.id.nothing_saved);
            nothing_saved.setText("Nothing saved to Watchlist");
        }
        else{
            // make grid
            RecyclerView watch_rv = view.findViewById(R.id.watchlist_recyclerView);
            WatchListRecyclerViewAdapter myAdapter = new WatchListRecyclerViewAdapter(getContext(), new_tasklist);
            watch_rv.setLayoutManager(new GridLayoutManager(getContext(), 3));
            watch_rv.setAdapter(myAdapter);

            ItemTouchHelper itemTouchHelper = new ItemTouchHelper(simpleCallback);
            itemTouchHelper.attachToRecyclerView(watch_rv);
        }

        return view;
    }



    // drag and drop code
    ItemTouchHelper.SimpleCallback simpleCallback = new ItemTouchHelper.SimpleCallback(ItemTouchHelper.UP | ItemTouchHelper.DOWN | ItemTouchHelper.START | ItemTouchHelper.END, 0) {
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {

            int fromPosition = viewHolder.getBindingAdapterPosition();
            int toPosition = target.getBindingAdapterPosition();
            List<WatchlistData> new_tasklist = PrefConfig.readListFromPref(getContext());

            Collections.swap(new_tasklist, fromPosition, toPosition);
            recyclerView.getAdapter().notifyItemMoved(fromPosition, toPosition);

            // swapping - saving position in the savedPreferences - maintaining the order
            SharedPreferences pref = PreferenceManager.getDefaultSharedPreferences(getContext().getApplicationContext());
            String jsonString = pref.getString("list_key", "");
            Gson gson = new Gson();
            Type type = new TypeToken<ArrayList<WatchlistData>>() {}.getType();
            ArrayList<WatchlistData> list = gson.fromJson(jsonString, type);

            ArrayList<WatchlistData> new_list = new ArrayList<>();
            for(int k = 0; k < list.size(); k++){
                if (k == fromPosition){
                    new_list.add(list.get(toPosition));
                }
                else if (k == toPosition){
                    new_list.add(list.get(fromPosition));
                }
                else{
                    new_list.add(list.get(k));
                }
            }

            PrefConfig.writeListInPref(getContext(), new_list);

            // removed now -- refresh the fragment again for live deletion

            FragmentTransaction tr = ((AppCompatActivity)getContext()).getSupportFragmentManager().beginTransaction();
            Fragment frag = new FragmentWatchlist();
            tr.replace(R.id.frame_layout, frag);
            tr.commit();

            return false;
        }

        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {

        }
    };


}