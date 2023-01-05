package com.example.librarySystem.publisher;

import lombok.AllArgsConstructor;
import org.springframework.dao.DataAccessException;
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


    @PutMapping("/edit/{name}")
    public ResponseEntity<String> editPublisher(@PathVariable String name, @RequestBody Publisher publisher) {
        try {
            if(!publisherService.publisherExists(name))
                return new ResponseEntity<>("Publisher doesn't exist", HttpStatus.BAD_REQUEST);
            publisherService.editPublisher(name, publisher);
            return new ResponseEntity<>("Publisher edited successfully", HttpStatus.OK);
        } catch (Exception e) {
            if (publisherService.PublisherExistsByPhone(publisher.getPhone()))
                return new ResponseEntity<>("Publisher Phone Already Exists", HttpStatus.BAD_REQUEST);
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{name}")
    public ResponseEntity<String> deletePublisher(@PathVariable String name) {
        try{
            if(!publisherService.publisherExists(name))
                return new ResponseEntity<>("Publisher Doesn't Exist", HttpStatus.BAD_REQUEST);
            publisherService.deletePublisher(name);
            return new ResponseEntity<>("Publisher was deleted successfully.", HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>("Publisher can't be deleted.", HttpStatus.BAD_REQUEST);
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
        System.out.println("IN Create");
        if (publisher.getPhone().equals("") || publisher.getName().equals("") || publisher.getAddress().equals(""))
            return new ResponseEntity<>("Field is empty, please enter all fields", HttpStatus.BAD_REQUEST);
        try {
            publisherService.createPublisher(publisher);
            return new ResponseEntity<>("Publisher was created successfully.", HttpStatus.CREATED);
        } catch (DataAccessException dae) {
            if(publisherService.publisherExists(publisher.getName()))
                return new ResponseEntity<>("Publisher Name Already Exists", HttpStatus.BAD_REQUEST);
            else if (publisherService.PublisherExistsByPhone(publisher.getPhone()))
                return new ResponseEntity<>("Publisher Phone Already Exists", HttpStatus.BAD_REQUEST);
            System.out.println("Message = " + dae.getMessage());
            return new ResponseEntity<>("Bad Request", HttpStatus.BAD_REQUEST);
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

}
