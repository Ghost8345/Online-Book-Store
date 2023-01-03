package com.example.librarySystem.stockOrder;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/stock")
public class StockOrderController {
    StockOrderService stockOrderService;

    //AUTOMATIC WHEN QUANTITY OF BOOK X DECREASES THAN THRESHOLD
    @PutMapping("/{managerId}/{isbn}/{quantity}")
    public ResponseEntity<StockOrder> makeOrder(@PathVariable int managerId,
                                                @PathVariable int isbn,
                                                @PathVariable int quantity){
        try {
            return new ResponseEntity<>(stockOrderService.makeOrder(managerId, isbn, quantity), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{userId}/{orderId}")
    public ResponseEntity<StockOrder> makeOrder(@PathVariable int userId,
                                                @PathVariable int orderId){
        return null;
    }

}
