package com.example.librarySystem.book;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {

    @Transactional
    @Modifying
    @Query("INSERT INTO book (isbn, title, publisherName, authors, publicationYear, coverImage, price, stockQuantity, threshold, category) VALUES (:isbn, :title, :publisherName, :authors, :publicationYear, :coverImage, :price, :stockQuantity, :threshold, :category)")
    void insert(@Param("isbn") int isbn, @Param("title") String title, @Param("publisherName") String publisherName, @Param("authors") String authors, @Param("publicationYear") String publicationYear, @Param("coverImage") String coverImage, @Param("price") float price, @Param("stockQuantity") int stockQuantity, @Param("threshold") int threshold, @Param("category") Category category);

    @Transactional
    @Modifying
    @Query("UPDATE book SET title = :title, publisherName = :publisherName, authors = :authors, publicationYear = :publicationYear, coverImage = :coverImage, price = :price, category = :category, threshold = :threshold, stockQuantity = :stockQuantity WHERE isbn = :isbn")
    void edit(@Param("isbn") int isbn, @Param("title") String title, @Param("publisherName") String publisherName, @Param("authors") String authors, @Param("publicationYear") String publicationYear, @Param("coverImage") String coverImage, @Param("price") float price, @Param("category") Category category, @Param("threshold") int threshold, @Param("stockQuantity") int stockQuantity);

    @Transactional
    @Modifying
    @Query("UPDATE book SET stockQuantity = :stockQuantity WHERE isbn = :isbn")
    void updateStockQuantity(@Param("isbn") int isbn, @Param("stockQuantity") int stockQuantity);

    Book findBookByTitle(String title);

    List<Book> findBooksByCategory(Category category);
    List<Book> findBooksByPublisherName(String publisherName);

    List<Book> findByAuthorsContaining(String author);
}
