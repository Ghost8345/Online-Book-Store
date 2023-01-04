package com.example.librarySystem.stockOrder;

import com.example.librarySystem.user.manager.ManagerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockOrderService {
    private final ManagerService managerService;
    private final StockOrderDAO stockOrderDAO;
    private final StockOrderRepository stockOrderRepository;

    public int makeOrder(int managerId,StockOrder newOrder) throws Exception {
        managerService.managerCheck(managerId);
        return stockOrderDAO.save(newOrder);
    }

    public String confirmOrder(int managerId, int orderId) throws Exception {
        managerService.managerCheck(managerId);
        stockOrderRepository.deleteById(orderId);
        return "Order confirmed successfully ... book quantity updated";
    }

    public List<StockOrder> getOrders(int managerId) throws Exception {
        managerService.managerCheck(managerId);
        List<StockOrder> orders =  (List<StockOrder>) stockOrderRepository.findAll();
        return orders;
    }
}

