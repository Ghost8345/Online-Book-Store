package com.example.librarySystem.jasper_report;

import lombok.Data;

@Data
public class CustomerPurchase {
    private String firstName;
    private String lastName;
    private String email;
    private int totalNoOfBooks;
    private float totalExpenditure;
}