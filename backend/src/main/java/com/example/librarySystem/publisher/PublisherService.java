package com.example.librarySystem.publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PublisherService {

    @Autowired
    PublisherRepository publisherRepository;

    public void editPublisher(String name, Publisher publisher){
        publisherRepository.edit(name, publisher.getName(), publisher.getAddress(), publisher.getPhone());
    }

    public void deletePublisher(String name){
        publisherRepository.deleteById(name);
    }

    public List<Publisher> getAllPublishers(){
        List<Publisher> publishers = new ArrayList();
        publisherRepository.findAll().forEach(publishers::add);
        return publishers;
    }

    public void createPublisher(Publisher publisher){
        publisherRepository.insert(publisher.getName(), publisher.getAddress(), publisher.getPhone());
    }

    public Publisher getPublisherByName(String name){
        return publisherRepository.findPublisherByName(name);
    }

    public boolean publisherExists(String name){ return publisherRepository.existsById(name);}

    public boolean PublisherExistsByPhone(String phone) {return publisherRepository.existsByPhone(phone);}



}
