package com.ElliottJavaClub.ElliottJavaclub.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String body;


    public Post(String title, String body){
        this.title = title;
        this.body = body;
    }

    public Post(){}

    //GETTERS
    public String getTitle(){
        return this.title;
    }
    public String getBody(){
        return this.body;
    }
    public Long getId(){
        return this.id;
    }

    //SETTERS
    public void setTitle(String title){
        this.title = title;
    }
    public void setBody(String body){
        this.body = body;
    }
}
