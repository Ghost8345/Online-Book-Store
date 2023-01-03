package com.example.librarySystem.user.registration;

import com.example.librarySystem.user.User;
import com.example.librarySystem.user.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class RegistrationService {

    UserRepository userRepository;


    public User createUser(User user) {
        userRepository.save(user);
        return user;
    }
}
