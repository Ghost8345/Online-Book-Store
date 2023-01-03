package com.example.librarySystem.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Data
public class Book {
    @Id
    private int isbn;
    private String title;
    @Column("copiesNum")
    private int copiesNum;
    @Column("publisherId")
    private int publisherId;
    private float price;

    public Book(String title, int copiesNum, int publisherId, float price) {
        this.title = title;
        this.copiesNum = copiesNum;
        this.publisherId = publisherId;
        this.price = price;
    }

}
