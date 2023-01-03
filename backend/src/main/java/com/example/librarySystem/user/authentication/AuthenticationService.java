package com.example.librarySystem.user.authentication;

import com.example.librarySystem.user.User;
import com.example.librarySystem.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationService {

    UserRepository userRepository;
    public int authenticateUser(AuthenticationRequest userLoginInfo) throws Exception {
        User user = userRepository.emailExists(userLoginInfo.getEmail()).orElseThrow();
        if (!user.getPassword().equals(userLoginInfo.getPassword())){
            throw new Exception("Password mismatch");
        }
        return user.getId();
    }
}
