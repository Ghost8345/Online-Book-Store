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
    public ResponseEntity<Integer> registerUser(@RequestBody User user){
        try {

            return ResponseEntity.ok().body( registrationService.createUser(user));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(-1);
        }
    }
}