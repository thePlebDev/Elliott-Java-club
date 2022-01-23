package com.ElliottJavaClub.ElliottJavaclub.controllers;

import com.ElliottJavaClub.ElliottJavaclub.models.Post;
import com.ElliottJavaClub.ElliottJavaclub.models.User;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/users")
public class UserController {



    @PostMapping("/admin/login") //unAuthenticated - CORS ?
    public void adminLogin(User user){

    }

    @GetMapping("/admin/login") //unAuthenticated - CORS ?
    public void adminLoginGet(){

    }





}
