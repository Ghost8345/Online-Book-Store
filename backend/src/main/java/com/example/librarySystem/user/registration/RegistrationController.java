package com.example.librarySystem.user.registration;

import com.example.librarySystem.user.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/register")
@AllArgsConstructor
public class RegistrationController {

    RegistrationService registrationService;

    @PostMapping("/")
        public ResponseEntity<String> registerUser(@RequestBody User user){
        try {
            registrationService.createUser(user);
            return ResponseEntity.ok().body("succeeded");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Couldn't create the user");
        }
    }
}