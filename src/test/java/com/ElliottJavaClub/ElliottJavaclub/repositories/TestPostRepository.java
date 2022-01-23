package com.ElliottJavaClub.ElliottJavaclub.repositories;

import com.ElliottJavaClub.ElliottJavaclub.models.Post;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.*;

@DataJpaTest
public class TestPostRepository {

    //UNDER TEST
    @Autowired
    private PostRepository underTest;


    @Test
    public void testGetById(){
        //GIVEN
        Post post = new Post("ANOTHER","IT DO BE LIKE THAT SOMETIMES");

        //WHEN
        underTest.save(post);
        Post returnedPost = underTest.getById(1L);

        //THEN
        assertThat(returnedPost.getId()).isEqualTo(1L);
    }
}
