package com.example.librarySystem.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public void createBook(Book book){
        bookRepository.insert(book.getIsbn(), book.getTitle(), book.getPublisherName(), book.getAuthors(), book.getPublicationYear(), book.getCoverImage(), book.getPrice(), book.getCategory(), book.getThreshold(), book.getStockQuantity());
    }

    public void deleteBook(int isbn){
        bookRepository.deleteById(isbn);
    }

    public void editBook(int isbn, Book book) {
        bookRepository.edit(isbn, book.getTitle(), book.getPublisherName(), book.getAuthors(), book.getPublicationYear(), book.getCoverImage(), book.getPrice(), book.getCategory(), book.getThreshold(), book.getStockQuantity());
    }

    public List<Book> getAllBooks(){
        List<Book> books = new ArrayList();
        bookRepository.findAll().forEach(books::add);
        return books;
    }

    public Book getBookByIsbn(int isbn){
        return bookRepository.findById(isbn).get();
    }

    public Book getBookByTitle(String title){return bookRepository.findBookByTitle(title);}


    public List<Book> getBooksByCategory(Category category) {
        return bookRepository.findBooksByCategory(category);
    }

    public List<Book> getBooksByPublisherName(String publisherName) {
        return bookRepository.findBooksByPublisherName(publisherName);
    }

    public List<Book> getBooksByAuthor(String author) {
        System.out.println(author);
        return bookRepository.findByAuthorsContaining(author);
    }


}
