package com.example.librarySystem.user;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    UserService userService;

    @PutMapping("/edit")
    public ResponseEntity<Integer> editUser(@RequestBody User user){
        try{
            return ResponseEntity.ok().body(userService.editUser(user));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(-1);
        }
    }
}
