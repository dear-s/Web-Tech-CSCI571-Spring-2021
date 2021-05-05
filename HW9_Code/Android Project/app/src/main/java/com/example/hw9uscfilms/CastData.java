package com.example.hw9uscfilms;

public class CastData {

    private String full_pp;
    private String name;

    public CastData(String full_pp, String name) {
        this.full_pp = full_pp;
        this.name = name;
    }

    public String getFull_pp() {
        return full_pp;
    }

    public void setFull_pp(String full_pp) {
        this.full_pp = full_pp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
