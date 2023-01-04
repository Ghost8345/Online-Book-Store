package com.example.librarySystem.user.manager;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/manager")
public class ManagerController {

    ManagerService managerService;

    @PutMapping("/promote/{managerId}")
    public ResponseEntity<String> promoteUser(@PathVariable int managerId,@RequestBody String userEmail){
        try {
            return ResponseEntity.ok().body(managerService.promoteUser(userEmail, managerId));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Couldn't promote user");
        }
    }
}
