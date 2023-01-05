package com.example.librarySystem.jasper_report;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public interface BookSaleRepo extends Repository<BookSale, Integer> {

    @Transactional
    @Query("SELECT title, ISBN, SUM(price*copies) as total, SUM(copies) as copies " +
            "FROM CUSTOMER_ORDER as o " +
            "JOIN CUSTOMER_ORDER_ITEM as oi ON o.id = oi.customerOrderId " +
            "NATURAL JOIN BOOK " +
            "GROUP BY ISBN " +
            "ORDER BY total DESC")
    public List<BookSale> getAllBooksSales();

    @Transactional
    @Query("SELECT title, ISBN, SUM(price*copies) as total, SUM(copies) as copies " +
            "FROM CUSTOMER_ORDER as o " +
            "JOIN CUSTOMER_ORDER_ITEM as oi ON o.id = oi.customerOrderId " +
            "NATURAL JOIN BOOK " +
            "WHERE o.date >= now() - interval 1 month " +
            "GROUP BY ISBN ")
    public List<BookSale> getAllBooksSalesLastMonth();

    @Transactional
    @Query("SELECT title, ISBN, SUM(price*copies) as total, SUM(copies) as copies " +
            "FROM CUSTOMER_ORDER as o " +
            "JOIN CUSTOMER_ORDER_ITEM as oi ON o.id = oi.customerOrderId " +
            "NATURAL JOIN BOOK " +
            "WHERE o.date >= now() - interval 3 month " +
            "GROUP BY ISBN " +
            "ORDER BY total DESC " +
            "LIMIT 10")
    public List<BookSale> getTop10Last3Months();
}
