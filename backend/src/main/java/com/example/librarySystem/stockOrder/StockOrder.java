package com.example.librarySystem.stockOrder;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;

@Data
@Accessors(chain = true,fluent = true)
@Builder
public class StockOrder {
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @Id
    private final int id;
    @NonNull
    private int isbn;
    @NonNull
    private int quantity;
}
