package com.example.librarySystem.user;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("SELECT * FROM USER u WHERE u.email = :email")
    Optional<User> emailExists(@Param("email") String email);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.manager = 1 WHERE u.id = :id")
    void promoteUser(@Param("id") int userId);



}
