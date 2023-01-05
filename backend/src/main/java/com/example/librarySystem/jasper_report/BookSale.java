package com.example.librarySystem.jasper_report;

import lombok.Data;

@Data
public class BookSale {
    private int isbn;
    private String title;
    private int copies;
    private float total;
}
