package com.example.librarySystem.customerOrder;

import com.example.librarySystem.book.BookService;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CustomerOrderService {

    private final CustomerOrderDAO customerOrderDAO;
    private final BookService bookService;

    public CustomerOrderService(CustomerOrderDAO customerOrderDAO, BookService bookService) {
        this.customerOrderDAO = customerOrderDAO;
        this.bookService = bookService;
    }

    /* Requirements:
    *
    * The customer is then required to provide a credit card number and its expiry date.
    * This transaction is completed successfully if the credit card information is appropriate.
    * The book’s quantities in the store are updated according to this transaction.
    *
    * */
    public void placeOrder(CustomerOrder order, CreditCard creditCard) {
        validateCreditCard(creditCard);

        Date now = new Date();
        order.setDate(new java.sql.Date(now.getTime()));
        customerOrderDAO.save(order);

        for(CustomerOrderItem item: order.getItems()) {
            bookService.reduceStockQuantity(item.getIsbn(), item.getCopies());
        }
    }


    private void validateCreditCard(CreditCard card) {
        String cvv = String.valueOf(card.getCvv());
        String cardNumber = String.valueOf(card.getNumber());

        if (cvv.length() != 3)
            throw new IllegalArgumentException("CVV is invalid");

        if (cardNumber.length() != 16)
            throw new IllegalArgumentException("Card number is invalid");

        Date now = new Date();

        boolean isValidExpirationDate =
               (card.getExpYear() > now.getYear())
            || (card.getExpYear() == now.getYear() && card.getExpMonth() >= now.getMonth());

        if (!isValidExpirationDate)
            throw new IllegalArgumentException("Card is expired.");
    }

}
