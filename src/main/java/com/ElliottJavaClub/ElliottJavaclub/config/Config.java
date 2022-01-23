package com.ElliottJavaClub.ElliottJavaclub.config;

import com.ElliottJavaClub.ElliottJavaclub.models.User;
import com.ElliottJavaClub.ElliottJavaclub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class Config {

    @Autowired
    private UserRepository userRepository;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
