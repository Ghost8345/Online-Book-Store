package com.example.librarySystem.controller;

import com.example.librarySystem.model.Publisher;
import com.example.librarySystem.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/publisher")
public class PublisherController {
    @Autowired
    PublisherRepository publisherRepository;


    @GetMapping
    public ResponseEntity<List<Publisher>> getAllPublishers() {
        try {
            List<Publisher> publishers = new ArrayList();

            publisherRepository.findAll().forEach(publishers::add);

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
            System.out.println("I'm In Create");
            System.out.println(publisher);
            publisherRepository.save(new Publisher(publisher.getName(), publisher.getAddress(),publisher.getPhone()));
            return new ResponseEntity<>("Publisher was created successfully.", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
