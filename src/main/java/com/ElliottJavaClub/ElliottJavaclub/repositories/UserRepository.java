package com.ElliottJavaClub.ElliottJavaclub.repositories;

import com.ElliottJavaClub.ElliottJavaclub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "SELECT * FROM USERS u WHERE u.username = :username", nativeQuery = true)
    User findByUsername(String username);
}
