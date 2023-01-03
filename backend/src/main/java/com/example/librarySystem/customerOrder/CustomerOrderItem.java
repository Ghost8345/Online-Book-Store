package com.example.librarySystem.customerOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerOrderItem {

    private Integer isbn;
    private Integer copies;

}
