package com.example.hw9uscfilms;

import java.util.Date;

public class ReviewData {

    int rating;
    String username;
    String date;
    String content;

    public ReviewData(int rating, String username, String date, String content) {
        this.rating = rating;
        this.username = username;
        this.date = date;
        this.content = content;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
