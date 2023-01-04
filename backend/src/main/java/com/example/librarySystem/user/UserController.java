package com.example.librarySystem.user;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    UserService userService;

    @PutMapping("/edit")
    public @ResponseBody ResponseEntity<Integer> editUser(@RequestBody User user) {
        try {
            return ResponseEntity.ok().body(userService.editUser(user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(-1);
        }
    }

    @GetMapping("/getUser")
    public @ResponseBody ResponseEntity<User> editUser(@RequestParam int user_id) {
        try {
            return ResponseEntity.ok().body(userService.getUserById(user_id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
