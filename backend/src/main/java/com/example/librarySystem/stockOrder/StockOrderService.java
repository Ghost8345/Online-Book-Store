package com.example.librarySystem.stockOrder;

import com.example.librarySystem.user.manager.ManagerService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
