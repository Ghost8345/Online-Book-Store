package com.example.librarySystem.customerOrder;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/orders")
public class CustomerOrderController {

    CustomerOrderService customerOrderService;

    public CustomerOrderController(CustomerOrderService customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    @PostMapping
    public ResponseEntity<String> placeOrder(@RequestBody CustomerOrderDTO request) {
        try {
            customerOrderService.placeOrder(request, request.getCreditCard());
            return new ResponseEntity<>("Order placed successfully.",HttpStatus.ACCEPTED);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>("Failed to place the order." + e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
}
