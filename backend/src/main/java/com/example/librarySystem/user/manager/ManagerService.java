package com.example.librarySystem.user.manager;

import com.example.librarySystem.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ManagerService {

    UserRepository userRepository;
    public String promoteUser(int userId, int managerId) throws Exception {
        managerCheck(managerId);
        userRepository.promoteUser(userId);
        return "User has been promoted";
    }

    public void managerCheck(int managerId) throws Exception {
        if (!userRepository.findById(managerId).get().isManager())
            throw new Exception("User isn't a manager");
    }
}
