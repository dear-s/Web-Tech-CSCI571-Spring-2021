package com.example.hw9uscfilms.fragments;

import android.app.SearchManager;
import android.content.Context;
import android.os.Bundle;

import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hw9uscfilms.R;
import com.example.hw9uscfilms.RecylerViewAdapter;
import com.example.hw9uscfilms.SearchRecylerViewAdapter;
import com.example.hw9uscfilms.SliderAdapter;
import com.example.hw9uscfilms.SliderData;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentSearch#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentSearch extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public FragmentSearch() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment FragmentSearch.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentSearch newInstance(String param1, String param2) {
        FragmentSearch fragment = new FragmentSearch();
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
        View view = inflater.inflate(R.layout.fragment_search, container, false);

        // code for searchBar widget
        SearchManager searchManager = (SearchManager) getActivity().getSystemService(Context.SEARCH_SERVICE);
        SearchView searchView = view.findViewById(R.id.searchBar_action);

        searchView.setSearchableInfo(searchManager.getSearchableInfo(getActivity().getComponentName()));
        searchView.setQueryHint("Search movies and TV");
        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                System.out.println("query we got: " + query);
                // load json - search result query
//                LoadJson();

                String URL = "https://hw9nodejs-312123.wl.r.appspot.com";
                RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request = new StringRequest(Request.Method.GET, URL+"/searchbar/" + query,
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
                                    JSONArray value = resultJson.getJSONArray("searched_results");

                                    // top rated movie slider
                                    final String TAG = "Fragment Search";
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<Double> ratings = new ArrayList<>();
                                    ArrayList<String> backdrop_paths = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> media_type = new ArrayList<String>();
                                    ArrayList<String> year = new ArrayList<String>();

                                    for(int i = 0; i < value.length(); i++){
                                        JSONObject objects = value.optJSONObject(i);
                                        String url_poster_path = objects.getString("backdrop_path");

                                        Long id = objects.getLong("id");
                                        String title = objects.getString("title");
                                        Double rating = objects.getDouble("rating");
                                        String pp = objects.getString("backdrop_path");
                                        String bp = objects.getString("poster_path");
                                        String mt = objects.getString("media_type");
                                        String yr = objects.getString("year");

                                        mImageUrls.add(url_poster_path);
                                        ids.add(id);
                                        titles.add(title);
                                        ratings.add(rating);
                                        backdrop_paths.add(pp);
                                        poster_paths.add(bp);
                                        media_type.add(mt);
                                        year.add(yr);
                                    }

                                    LinearLayoutManager layoutManager = new LinearLayoutManager(
                                            view.getContext(), LinearLayoutManager.VERTICAL, false
                                    );
                                    RecyclerView recyclerView = view.findViewById(R.id.search_recyclerView);
                                    recyclerView.setLayoutManager(layoutManager);
                                    SearchRecylerViewAdapter adapter = new SearchRecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, ratings, backdrop_paths, poster_paths, media_type, year);
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
                queue.add(request);
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
//                LoadJson();
                String URL = "https://hw9nodejs-312123.wl.r.appspot.com";
                RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
                StringRequest request = new StringRequest(Request.Method.GET, URL+"/searchbar/" + newText,
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
                                    JSONArray value = resultJson.getJSONArray("searched_results");

                                    // top rated movie slider
                                    final String TAG = "Fragment Search";
                                    ArrayList<String> mImageUrls = new ArrayList<>();
                                    ArrayList<Long> ids = new ArrayList<>();
                                    ArrayList<String> titles = new ArrayList<String>();
                                    ArrayList<Double> ratings = new ArrayList<>();
                                    ArrayList<String> backdrop_paths = new ArrayList<String>();
                                    ArrayList<String> poster_paths = new ArrayList<String>();
                                    ArrayList<String> media_type = new ArrayList<String>();
                                    ArrayList<String> year = new ArrayList<String>();

                                    if (value.length() == 0){
                                        // no results found
                                        TextView no_results_found = view.findViewById(R.id.no_result_found);
                                        no_results_found.setVisibility(View.VISIBLE);

                                        RecyclerView recyclerView = view.findViewById(R.id.search_recyclerView);
                                        recyclerView.setVisibility(View.GONE);
                                    }

                                    else {

                                        TextView no_results_found = view.findViewById(R.id.no_result_found);
                                        no_results_found.setVisibility(View.GONE);

                                        for(int i = 0; i < value.length(); i++){
                                            JSONObject objects = value.optJSONObject(i);
                                            String url_poster_path = objects.getString("backdrop_path");

                                            Long id = objects.getLong("id");
                                            String title = objects.getString("title");
                                            Double rating = objects.getDouble("rating");
                                            String bp = objects.getString("backdrop_path");
                                            String pp = objects.getString("poster_path");
                                            String mt = objects.getString("media_type");
                                            String yr = objects.getString("year");

                                            mImageUrls.add(url_poster_path);
                                            ids.add(id);
                                            titles.add(title);
                                            ratings.add(rating);
                                            backdrop_paths.add(bp);
                                            poster_paths.add(pp);
                                            media_type.add(mt);
                                            year.add(yr);
                                        }

                                        LinearLayoutManager layoutManager = new LinearLayoutManager(
                                                view.getContext(), LinearLayoutManager.VERTICAL, false
                                        );
                                        RecyclerView recyclerView = view.findViewById(R.id.search_recyclerView);
                                        recyclerView.setVisibility(View.VISIBLE);
                                        recyclerView.setLayoutManager(layoutManager);
                                        SearchRecylerViewAdapter adapter = new SearchRecylerViewAdapter(view.getContext(), mImageUrls, ids, titles, ratings, backdrop_paths, poster_paths, media_type, year);
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
                queue.add(request);
                return false;
            }
        });

        return view;
    }

}