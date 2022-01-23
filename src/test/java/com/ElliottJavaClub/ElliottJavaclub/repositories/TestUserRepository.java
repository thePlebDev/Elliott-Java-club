package com.ElliottJavaClub.ElliottJavaclub.repositories;

import com.ElliottJavaClub.ElliottJavaclub.models.User;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class TestUserRepository {
    //UNDER TEST
    @Autowired
    UserRepository underTest;

    @Test
    public void findByUsernameTest(){
        //GIVEN
        String EXPECTEDUSERNAME = "ANOTHER";
        User user = new User(EXPECTEDUSERNAME,"asdf");

        //WHEN
        User savedUser = underTest.save(user);
        User returnedUser = underTest.findByUsername(EXPECTEDUSERNAME);

        //THEN
        assertThat(returnedUser.getUsername()).isEqualTo(EXPECTEDUSERNAME);
    }
}
