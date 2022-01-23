package com.ElliottJavaClub.ElliottJavaclub.config;

import com.ElliottJavaClub.ElliottJavaclub.auth.CustomAuthenticationProvider;
import com.ElliottJavaClub.ElliottJavaclub.auth.filters.CustomTokenLogger;
import com.ElliottJavaClub.ElliottJavaclub.auth.filters.RequestValidationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
public class ProjectConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomAuthenticationProvider customAuthenticationProvider;


    @Override
    protected  void configure(AuthenticationManagerBuilder auth){
        auth.authenticationProvider(customAuthenticationProvider);
    }

    @Override
    protected  void configure(HttpSecurity http) throws Exception{

        http.csrf().disable();

        http.addFilterAfter(new CustomTokenLogger(), CsrfFilter.class);

        http.authorizeRequests()
                .mvcMatchers("/api/v1/users/test")
                .permitAll()
                .mvcMatchers("/api/v1/posts/getPost/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }


}
