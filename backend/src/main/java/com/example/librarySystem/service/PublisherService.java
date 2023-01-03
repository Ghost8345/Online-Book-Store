package com.example.librarySystem.service;

import com.example.librarySystem.model.Publisher;
import com.example.librarySystem.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PublisherService {

    @Autowired
    PublisherRepository publisherRepository;

    public void editPublisher(int id, Publisher publisher){
        Publisher existingPublisher = publisherRepository.findById(id).get();
        existingPublisher.setName(publisher.getName());
        existingPublisher.setAddress(publisher.getAddress());
        existingPublisher.setPhone(publisher.getPhone());
        publisherRepository.save(existingPublisher);
    }

    public void deletePublisher(int id){
        publisherRepository.deleteById(id);
    }

    public List<Publisher> getAllPublishers(){
        List<Publisher> publishers = new ArrayList();
        publisherRepository.findAll().forEach(publishers::add);
        return publishers;
    }

    public void createPublisher(Publisher publisher){
        publisherRepository.save(new Publisher(publisher.getName(), publisher.getAddress(),publisher.getPhone()));
    }

    public Publisher getPublisherByName(String name){
        return publisherRepository.findPublisherByName(name);
    }

    public Publisher getPublisherById(int id){
        return publisherRepository.findById(id).get();
    }


}
