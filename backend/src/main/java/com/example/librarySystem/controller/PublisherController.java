package com.example.librarySystem.controller;

import com.example.librarySystem.model.Publisher;
import com.example.librarySystem.service.PublisherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/publisher")
@AllArgsConstructor
public class PublisherController {

    private final PublisherService publisherService;


    @PutMapping("/edit/{id}")
    public ResponseEntity<String> editPublisher(@PathVariable int id, @RequestBody Publisher publisher) {
        try {
            System.out.println(publisher);
            publisherService.editPublisher(id, publisher);
            return new ResponseEntity<>("Publisher edited successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePublisher(@PathVariable int id) {
        try{
            publisherService.deletePublisher(id);
            return new ResponseEntity<>("Publisher was deleted successfully.", HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping
    public ResponseEntity<List<Publisher>> getAllPublishers() {
        try {
            List<Publisher> publishers = publisherService.getAllPublishers();
            if (publishers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(publishers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<String> createPublisher(@RequestBody Publisher publisher) {
        try {
            publisherService.createPublisher(publisher);
            return new ResponseEntity<>("Publisher was created successfully.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Publisher> getPublisherByName(@PathVariable String name) {
        try {
            Publisher publisher = publisherService.getPublisherByName(name);
            return new ResponseEntity<>(publisher, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Publisher> getPublisherById(@PathVariable int id) {
        try {
            Publisher publisher = publisherService.getPublisherById(id);
            return new ResponseEntity<>(publisher, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
