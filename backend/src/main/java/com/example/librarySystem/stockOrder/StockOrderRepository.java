package com.example.librarySystem.stockOrder;


import com.example.librarySystem.book.Book;
import com.example.librarySystem.book.Category;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface StockOrderRepository  extends CrudRepository<StockOrder, Integer> {
//
//    @Transactional
//    @Modifying
//    @Query("INSERT INTO stock_order (isbn, quantity) VALUES (:isbn, :quantity)")
//    void insert(@Param("isbn") int isbn, @Param("quantity") int quantity);

}
