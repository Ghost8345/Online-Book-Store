package com.example.librarySystem.user.manager;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/manager")
public class ManagerController {

    ManagerService managerService;

    @PutMapping("/promote")
    public ResponseEntity<String> promoteUser(@RequestParam int userId, @RequestParam int managerId){
        try {
            return ResponseEntity.ok().body(managerService.promoteUser(userId, managerId));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Couldn't promote user");
        }
    }
}
