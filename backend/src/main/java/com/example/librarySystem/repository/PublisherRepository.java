package com.example.librarySystem.repository;

import com.example.librarySystem.model.Publisher;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PublisherRepository extends CrudRepository<Publisher, Integer> {

    @Query("SELECT * FROM testdb.publisher as p where p.name = :name")
    Publisher findPublisherByName(@Param("name") String name);

    @Query("SELECT * FROM testdb.publisher as p where p.id = :id")
    Publisher findPublisherByID1(@Param("id") int id);
}
