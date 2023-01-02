package com.example.librarySystem.repository;

import com.example.librarySystem.model.Publisher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublisherRepository extends CrudRepository<Publisher, Integer> {

//    getPublisherByName

}
