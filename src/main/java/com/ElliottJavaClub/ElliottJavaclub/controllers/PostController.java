package com.ElliottJavaClub.ElliottJavaclub.controllers;

import com.ElliottJavaClub.ElliottJavaclub.models.Post;
import com.ElliottJavaClub.ElliottJavaclub.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/getPost/all") //UN-AUTHENTICATED
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("/getPost/{id}")//UN-AUTHENTICATED
    public Post getPostById(@PathVariable Long id){
        return postService.getPostById(id);
    }

    @PostMapping("admin/create")//VERY-AUTHENTICATED
    public void createPost(Post post){
        postService.save(post);
    }
}
