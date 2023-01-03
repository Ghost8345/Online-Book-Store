package com.example.librarySystem.publisher;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PublisherRepository extends CrudRepository<Publisher, String> {

    @Query("SELECT * FROM LIBRARY.publisher as p where p.name = :name")
    Publisher findPublisherByName(@Param("name") String name);

    @Transactional
    @Modifying
    @Query("INSERT INTO LIBRARY.publisher (name, address, phone) VALUES (:name, :address, :phone)")
    void insert(@Param("name") String name, @Param("address") String address, @Param("phone") String phone);


    @Transactional
    @Modifying
    @Query("UPDATE LIBRARY.publisher SET name = :newName, address = :address, phone = :phone WHERE name = :oldName")
    void edit(@Param("oldName") String oldName, @Param("newName") String newName, @Param("address") String address, @Param("phone") String phone);

}
