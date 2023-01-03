package com.example.librarySystem.stockOrder;

import com.example.librarySystem.user.manager.ManagerService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StockOrderService {
    private final ManagerService managerService;
    private final StockOrderRepository stockOrderRepository;


    public StockOrder makeOrder(int managerId,StockOrder newOrder) throws Exception {
        managerService.managerCheck(managerId);
        System.out.println("manager yes");
        stockOrderRepository.insert(newOrder.isbn(), newOrder.quantity());
        System.out.println("Added");
        StockOrder created = stockOrderRepository.findByAttr(newOrder.isbn(), newOrder.quantity());
        System.out.println("here he is " + created);
        return created;
    }
}
