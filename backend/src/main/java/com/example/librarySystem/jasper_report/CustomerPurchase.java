package com.example.librarySystem.jasper_report;

import lombok.Data;

@Data
public class CustomerPurchase {

    private String first;
    private String last;
    private String email;
    private int count;
    private float total;
}