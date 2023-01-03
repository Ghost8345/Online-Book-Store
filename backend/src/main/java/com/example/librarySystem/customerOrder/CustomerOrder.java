package com.example.librarySystem.customerOrder;

import lombok.Data;

import java.sql.Date;
import java.util.List;


@Data
public class CustomerOrder {

    private Integer id;
    private Integer userId;
    private Date date;
    private List<CustomerOrderItem> items;

}
