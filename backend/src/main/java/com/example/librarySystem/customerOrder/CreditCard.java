package com.example.librarySystem.customerOrder;

import lombok.Data;


@Data
public class CreditCard {

    private String number;
    private int cvv;
    private int expYear;
    private int expMonth;

}

