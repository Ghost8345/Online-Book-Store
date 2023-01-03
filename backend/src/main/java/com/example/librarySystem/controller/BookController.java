package com.example.librarySystem.controller;
import com.example.librarySystem.model.Book;
import com.example.librarySystem.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @PostMapping
    public ResponseEntity<String> createBook(@RequestBody Book book) {
        try{
            System.out.println("I'm In Create");
            System.out.println(book);
            bookRepository.save(new Book(book.getTitle(), book.getCopiesNum(), book.getPublisherId(), book.getPrice()));
            return new ResponseEntity<>("Book was created successfully.", HttpStatus.CREATED);
        }
        catch(Exception e ){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = new ArrayList();
            bookRepository.findAll().forEach(books::add);
            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
