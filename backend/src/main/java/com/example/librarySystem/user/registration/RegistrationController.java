package com.example.librarySystem.user.registration;

import com.example.librarySystem.user.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
@AllArgsConstructor
public class RegistrationController {

    RegistrationService registrationService;

    @PostMapping("/")
    public ResponseEntity<String> registerUser(@RequestBody User user){
        try {
            return ResponseEntity.ok().body(registrationService.createUser(user));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Couldn't create the user");
        }
    }
}
