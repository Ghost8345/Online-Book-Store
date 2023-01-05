package com.example.librarySystem.user.registration;

import com.example.librarySystem.user.User;
import com.example.librarySystem.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RegistrationService {

    UserRepository userRepository;

    public int createUser(User user) throws Exception {
        if (!checkIfFirstUser(user))
            checkIfEmailExists(user);
        userRepository.save(user);
        return user.getId();
    }

    private boolean checkIfFirstUser(User user) {
        List<User> users = (List<User>) userRepository.findAll();
        if (users.size()==0) {
            user.setManager(true);
            return true;
        }
        return false;
    }

    private void checkIfEmailExists(User user) throws Exception {
        if (userRepository.emailExists(user.getEmail()).isPresent())
            throw new Exception("Email already exists");
    }
}
