package com.example.librarySystem.stockOrder;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/stock")
public class StockOrderController {
    //INIT REPO
    //INIT SERVICE

    //AUTOMATIC WHEN QUANTITY OF BOOK X DECREASES THAN THRESHOLD
    @PutMapping("/{userId}")
    public ResponseEntity<StockOrder> makeOrder(@PathVariable int userId,
                                                @RequestBody StockOrder currentOrder){
        return null;
    }

    @DeleteMapping("/{userId}/{orderId}")
    public ResponseEntity<StockOrder> makeOrder(@PathVariable int userId,
                                                @PathVariable int orderId){
        return null;
    }

}
