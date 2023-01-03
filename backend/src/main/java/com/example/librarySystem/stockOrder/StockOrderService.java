package com.example.librarySystem.stockOrder;

import com.example.librarySystem.user.manager.ManagerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StockOrderService {
    ManagerService managerService;
    StockOrderRepository stockOrderRepository;


    public StockOrder makeOrder(int managerId,int isbn,int quantity) throws Exception {
        managerService.managerCheck(managerId);
        stockOrderRepository.insert(isbn,quantity);
        return stockOrderRepository.findByAttr(isbn,quantity);
    }


}
