package com.example.librarySystem.stockOrder;


import com.example.librarySystem.book.Category;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface StockOrderRepository {

    @Transactional
    @Modifying
    @Query("INSERT INTO stock_order (isbn, quantity) VALUES (:isbn, :quantity)")
    void insert(@Param("isbn") int isbn, @Param("quantity") int quantity);

    @Transactional
    @Modifying
    @Query("SELECT * FROM stock_order s WHERE s.isbn = :isbn AND s.quantity = :quantity")
    StockOrder findByAttr(@Param("isbn") int isbn, @Param("quantity") int quantity);
}
