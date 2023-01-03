package com.example.librarySystem.stockOrder;

import com.example.librarySystem.customerOrder.CustomerOrder;
import com.example.librarySystem.customerOrder.CustomerOrderItem;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.util.Objects;

@Component
@AllArgsConstructor
public class StockOrderDAO {

    private final JdbcTemplate jdbcTemplate;

    @Transactional
    public int save(StockOrder order) {
        String sql = "INSERT INTO STOCK_ORDER (isbn, quantity) values (?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"id"});
            ps.setInt(1, order.isbn());
            ps.setInt(2, order.quantity());
            return ps;
        }, keyHolder);

        return Objects.requireNonNull(keyHolder.getKey()).intValue();
    }
}
