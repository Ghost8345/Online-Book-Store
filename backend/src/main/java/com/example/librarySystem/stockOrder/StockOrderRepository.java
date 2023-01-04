package com.example.librarySystem.stockOrder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockOrderRepository  extends CrudRepository<StockOrder, Integer> {

}
