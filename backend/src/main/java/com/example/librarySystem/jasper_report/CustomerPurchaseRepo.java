package com.example.librarySystem.jasper_report;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public interface CustomerPurchaseRepo extends Repository<CustomerPurchase, Integer> {

    @Transactional
    @Query("SELECT firstName as first, lastName as last, email, SUM(oi.copies*price) as total, sum(oi.copies) as `count` " +
            "FROM CUSTOMER_ORDER as o " +
            "JOIN CUSTOMER_ORDER_ITEM as oi ON o.id = oi.customerOrderId " +
            "JOIN `USER` as u on u.id = o.userId " +
            "NATURAL JOIN BOOK " +
            "GROUP BY u.id;")
    public List<CustomerPurchase> getAllCustomersPurchases();

    @Transactional
    @Query("SELECT firstName as first, lastName as last, email, SUM(oi.copies*price) as total, sum(oi.copies) as `count` " +
            "FROM CUSTOMER_ORDER as o " +
            "JOIN CUSTOMER_ORDER_ITEM as oi ON o.id = oi.customerOrderId " +
            "JOIN `USER` as u on u.id = o.userId " +
            "NATURAL JOIN BOOK " +
            "WHERE o.date >= now() - interval 3 month " +
            "GROUP BY u.id " +
            "ORDER BY total DESC " +
            "LIMIT 5")
    public List<CustomerPurchase> getTop5MostSpendingCustomersLast3Months();


}
