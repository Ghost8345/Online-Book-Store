package com.example.librarySystem.stockOrder;


import com.example.librarySystem.user.manager.ManagerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/stock")
@AllArgsConstructor
public class StockOrderController {
    private final StockOrderService stockOrderService;
    private final ManagerService managerService;


    @GetMapping("/{managerId}")
    public ResponseEntity<List<StockOrder>> getPendingOrders(@PathVariable int managerId){
        try {
            managerService.managerCheck(managerId);
            List<StockOrder> orders = stockOrderService.getOrders();
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    //RETURNS ID CREATED
    @PutMapping("/{managerId}")
    public ResponseEntity<Integer> makeOrder(@PathVariable int managerId,
                                                @RequestBody StockOrder newOrder){
        try {
            managerService.managerCheck(managerId);
            return new ResponseEntity<>(stockOrderService.makeOrder(newOrder), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(-1, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{managerId}/{orderId}")
    public ResponseEntity<String> confirmOrder(@PathVariable int managerId,
                                                @PathVariable int orderId) {
        try {
            managerService.managerCheck(managerId);
            return new ResponseEntity<>(stockOrderService.confirmOrder(orderId), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
