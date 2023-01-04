package com.example.librarySystem.stockOrder;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StockOrder {
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @Id
    private int id;
    private int isbn;
    private int quantity;
}
