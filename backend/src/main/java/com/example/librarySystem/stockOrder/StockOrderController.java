package com.example.librarySystem.stockOrder;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/stock")
@AllArgsConstructor
public class StockOrderController {
    private final StockOrderService stockOrderService;

    //AUTOMATIC WHEN QUANTITY OF BOOK X DECREASES THAN THRESHOLD
    @PutMapping("/{managerId}")
    public ResponseEntity<Integer> makeOrder(@PathVariable int managerId,
                                                @RequestBody StockOrder newOrder){
        try {
            System.out.println("entered");
            return new ResponseEntity<>(stockOrderService.makeOrder(managerId, newOrder), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(-1, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{userId}/{orderId}")
    public ResponseEntity<StockOrder> confirmOrder(@PathVariable int userId,
                                                @PathVariable int orderId){
        return null;
    }

}
