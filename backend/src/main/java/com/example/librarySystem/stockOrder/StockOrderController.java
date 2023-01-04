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
                                                @PathVariable int orderId) throws Exception {
//        try {
            return new ResponseEntity<>(stockOrderService.confirmOrder(managerId, orderId), HttpStatus.OK);
//        }catch (Exception e){
//            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
//        }
    }

}
