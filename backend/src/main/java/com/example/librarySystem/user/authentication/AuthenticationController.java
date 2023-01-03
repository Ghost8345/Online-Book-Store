package com.example.librarySystem.user.authentication;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/login")
public class AuthenticationController {

    AuthenticationService authenticationService;

    @PostMapping("/")
    public ResponseEntity<UserInfo> authenticateUser(@RequestBody AuthenticationRequest userLoginInfo){
        try {

            return ResponseEntity.ok().body(authenticationService.authenticateUser(userLoginInfo));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(null);
        }
    }
}
