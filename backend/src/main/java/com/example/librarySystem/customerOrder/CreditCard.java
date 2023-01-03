package com.example.librarySystem.customerOrder;

import lombok.Data;


@Data
public class CreditCard {

    private int number;
    private int cvv;
    private int expYear;
    private int expMonth;

}

