package com.example.hw9uscfilms;

public class WatchlistData {

    private long id;
    private String media_type;
    private String poster_path;
    private String backdrop_path;
    private String title;


    public WatchlistData(long id, String media_type, String poster_path, String backdrop_path, String title) {
        this.id = id;
        this.media_type = media_type;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMedia_type() {
        return media_type;
    }

    public void setMedia_type(String media_type) {
        this.media_type = media_type;
    }

    public String getPoster_path() {
        return poster_path;
    }

    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }

    public String getBackdrop_path() {
        return backdrop_path;
    }

    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
