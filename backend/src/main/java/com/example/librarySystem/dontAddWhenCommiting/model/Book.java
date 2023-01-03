package com.example.librarySystem.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

@Data
public class Book {
    @Id
    private int isbn;
    private String title;
    private int copiesNum;
    private AggregateReference<Publisher, Integer> publisherId;
    private float price;

    public Book(String title, int copiesNum, AggregateReference<Publisher, Integer> publisherId, float price) {
        this.title = title;
        this.copiesNum = copiesNum;
        this.publisherId = publisherId;
        this.price = price;
    }

}
