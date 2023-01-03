package com.example.librarySystem.model;
import lombok.Data;
import org.springframework.data.annotation.Id;


@Data
public class Publisher {
    @Id
    private int id;
    private String name;
    private String address;
    private String phone;

    public Publisher(String name, String address, String phone){
        this.name = name;
        this.address = address;
        this.phone = phone;

    }
}
