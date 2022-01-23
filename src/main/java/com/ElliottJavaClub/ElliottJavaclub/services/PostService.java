package com.ElliottJavaClub.ElliottJavaclub.services;

import com.ElliottJavaClub.ElliottJavaclub.models.Post;
import com.ElliottJavaClub.ElliottJavaclub.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;


    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.getById(id);
    }

    public void save(Post post) {
        postRepository.save(post);
    }
}
