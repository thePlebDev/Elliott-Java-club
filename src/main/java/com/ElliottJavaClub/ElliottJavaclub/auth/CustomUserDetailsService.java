package com.ElliottJavaClub.ElliottJavaclub.auth;

import com.ElliottJavaClub.ElliottJavaclub.models.User;
import com.ElliottJavaClub.ElliottJavaclub.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User foundUser = userRepository.findByUsername(username);
        if(username == null){
            throw new UsernameNotFoundException("USER NOT FOUND");
        }
        return new SecurityUser(foundUser);
    }
}
