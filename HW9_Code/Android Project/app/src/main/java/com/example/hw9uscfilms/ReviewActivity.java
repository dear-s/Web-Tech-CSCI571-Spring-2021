package com.example.hw9uscfilms;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class ReviewActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review);

        // retrieve
        int rating = getIntent().getExtras().getInt("rating");
        System.out.println("RA rating:  " + rating);

        String username = getIntent().getExtras().getString("username");
        System.out.println("RA username: " + username);

        String date = getIntent().getExtras().getString("date");
        System.out.println("RA date: " + date);

        String content = getIntent().getExtras().getString("content");
        System.out.println("RA content: " + content);

        TextView txtRating, txtUserDate, txtContent;

        txtRating = findViewById(R.id.rev_rating);
        txtUserDate = findViewById(R.id.rev_user_date);
        txtContent = findViewById(R.id.rev_content);

        txtRating.setText(rating + "/5");
        txtUserDate.setText("by " + username + " on " + date);
        txtContent.setText(content);

    }
}