package com.example.librarySystem.stockOrder;


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

    @GetMapping("/{managerId}")
    public ResponseEntity<List<StockOrder>> getPendingOrders(@PathVariable int managerId){
        try {
            List<StockOrder> orders = stockOrderService.getOrders(managerId);
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
            return new ResponseEntity<>(stockOrderService.makeOrder(managerId, newOrder), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(-1, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{managerId}/{orderId}")
    public ResponseEntity<String> confirmOrder(@PathVariable int managerId,
                                                @PathVariable int orderId) {
        try {
            return new ResponseEntity<>(stockOrderService.confirmOrder(managerId, orderId), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
