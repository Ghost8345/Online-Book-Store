package com.example.librarySystem.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    UserRepository userRepository;
    public Integer editUser(User user) {
        userRepository.save(user);
        return 1;
    }
}
