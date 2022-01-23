package com.ElliottJavaClub.ElliottJavaclub.config;

import com.ElliottJavaClub.ElliottJavaclub.models.User;
import com.ElliottJavaClub.ElliottJavaclub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class CommandLineRunner implements org.springframework.boot.CommandLineRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void run(String... args) throws Exception {
        String username = "bob";
        String password = "12345";
        String encodedPassword = bCryptPasswordEncoder.encode(password);
        User user = new User("bob",encodedPassword);
        userRepository.save(user);
    }
}
