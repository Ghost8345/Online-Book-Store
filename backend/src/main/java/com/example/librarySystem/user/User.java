package com.example.librarySystem.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Data
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    private int id;
    @Column("firstName")
    private String firstName;
    @Column("lastName")
    private String lastName;
    private String email;
    private String password;
    private boolean manager;
}
