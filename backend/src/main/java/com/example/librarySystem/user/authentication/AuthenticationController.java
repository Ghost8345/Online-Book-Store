package com.example.librarySystem.user.authentication;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/login")
public class AuthenticationController {

    AuthenticationService authenticationService;

    @PostMapping("/")
    public ResponseEntity<Integer> authenticateUser(@RequestBody AuthenticationRequest userLoginInfo){
        try {
            return ResponseEntity.ok().body(authenticationService.authenticateUser(userLoginInfo));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(-1);
        }
    }
}
