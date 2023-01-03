package com.example.librarySystem.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.xml.bind.DatatypeConverter;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;


@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public void createBook(Book book){
        bookRepository.insert(book.getIsbn(), book.getTitle(), book.getPublisherName(), book.getAuthors(), book.getPublicationYear(), book.getCoverImage(), book.getPrice(), book.getStockQuantity(), book.getThreshold(),book.getCategory());
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
    public String StorePhotoInPath(String photo, int i) {
        String base64String = photo;
        String[] strings = base64String.split(",");
        String extension = switch (strings[0]) {//check image's extension
            case "data:image/jpeg;base64" -> "jpeg";
            case "data:image/png;base64" -> "png";
            default ->//should write cases for more images types
                    "jpg";
        };
        //convert base64 string to binary data
        byte[] data = DatatypeConverter.parseBase64Binary(strings[1]);
        System.out.println(System.getProperty("user.dir"));
        String[] s1 = System.getProperty("user.dir").split("backend");
        String out;
        if (s1[0].contains("/")) {
            out = s1[0] + "frontend/src/assets/images/" + i + "." + extension;//for Linux Users
        } else {
            out = s1[0] + "frontend\\src\\assets\\images\\" + i + "." + extension;//for Windows Users
        }
        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(out))) {
            outputStream.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return i + "." + extension;
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
