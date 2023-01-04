package com.example.librarySystem.jasper_report;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Column;

@Data
public class CustomerPurchase {

    private String first;
    private String last;
    private String email;
    private int count;
    private float total;

}