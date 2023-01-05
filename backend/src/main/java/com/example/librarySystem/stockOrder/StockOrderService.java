package com.example.librarySystem.stockOrder;

import com.example.librarySystem.user.manager.ManagerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockOrderService {
    private final StockOrderDAO stockOrderDAO;
    private final StockOrderRepository stockOrderRepository;

    public int makeOrder(StockOrder newOrder) throws Exception {
        return stockOrderDAO.save(newOrder);
    }

    public String confirmOrder(int orderId) throws Exception {
        stockOrderRepository.deleteById(orderId);
        return "Order confirmed successfully ... book quantity updated";
    }

    public List<StockOrder> getOrders() throws Exception {
        List<StockOrder> orders =  (List<StockOrder>) stockOrderRepository.findAll();
        return orders;
    }
}

