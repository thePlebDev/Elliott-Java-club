package com.ElliottJavaClub.ElliottJavaclub.models;

import javax.persistence.*;

@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    private String password;
    private String authorities = "ADMIN";

    public User(){}

    public User(String username,String password){
        this.username = username;
        this.password = password;
    }

    //GETTERS
    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }
    public Long getId(){
        return this.id;
    }
    public String getAuthorities(){return this.authorities;}

    //SETTERS
    public void setUsername(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }
}
