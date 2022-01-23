package com.ElliottJavaClub.ElliottJavaclub.repositories;

import com.ElliottJavaClub.ElliottJavaclub.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
