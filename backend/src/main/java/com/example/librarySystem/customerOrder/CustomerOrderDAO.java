package com.example.librarySystem.customerOrder;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.util.Objects;

@Component
public class CustomerOrderDAO {

    private JdbcTemplate jdbcTemplate;

    public CustomerOrderDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Transactional
    public void save(CustomerOrder order) {
        String sql = "INSERT INTO CUSTOMER_ORDER (userId, `date`) values (?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[] {"id"});
            ps.setInt(1, order.getUserId());
            ps.setDate(2, order.getDate());
            return ps;
        }, keyHolder);

        int generatedId = Objects.requireNonNull(keyHolder.getKey()).intValue();

        for (CustomerOrderItem item: order.getItems()) {
            saveItem(item, generatedId);
        }
    }

    private void saveItem(CustomerOrderItem item, int customerOrderId) {
        String sql =
                "INSERT INTO CUSTOMER_ORDER_ITEM (ISBN, copies, customerOrderId) values (?,?,?)";
        jdbcTemplate.update(sql, item.getIsbn(), item.getCopies(), customerOrderId);
    }


}
