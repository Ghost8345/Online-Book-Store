package com.example.librarySystem.book;
import com.example.librarySystem.publisher.Publisher;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/book")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping
    public ResponseEntity<String> createBook(@RequestBody Book book) {
        try{
            System.out.println("I'm In Create");
            System.out.println(book);
            book.setCoverImage(bookService.StorePhotoInPath(book.getCoverImage(), book.getIsbn()));
            bookService.createBook(book);
            return new ResponseEntity<>("Book was created successfully.", HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @DeleteMapping("/delete/{isbn}")
    public ResponseEntity<String> deleteBook(@PathVariable int isbn) {
        try{
            System.out.println("I'm In Delete");
            bookService.deleteBook(isbn);
            return new ResponseEntity<>("Book was deleted successfully.", HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/edit/{isbn}")
    public ResponseEntity<String> editBook(@PathVariable int isbn, @RequestBody Book book) {
        try {
            book.setCoverImage(bookService.StorePhotoInPath(book.getCoverImage(), book.getIsbn()));
            System.out.println(isbn+" jjjj "+book);
            bookService.editBook(isbn, book);
            return new ResponseEntity<>("Book edited successfully", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage()+book.getIsbn());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = bookService.getAllBooks();
            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/isbn/{isbn}")
    public ResponseEntity<Book> getBookByIsbn(@PathVariable int isbn) {
        try {
            Book book = bookService.getBookByIsbn(isbn);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<Book> getBookByTitle(@PathVariable String title) {
        try {
            Book book = bookService.getBookByTitle(title);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Book>> getBooksByCategory(@PathVariable Category category) {
        try {
            List<Book> books = bookService.getBooksByCategory(category);
            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/publisherName/{publisherName}")
    public ResponseEntity<List<Book>> getBooksByPublisherName(@PathVariable String publisherName) {
        try {
            List<Book> books = bookService.getBooksByPublisherName(publisherName);
            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/author/{author}")
    public ResponseEntity<List<Book>> getBooksByAuthor(@PathVariable String author) {
        try {
            System.out.println("IN getBooksByAuthor");
            List<Book> books = bookService.getBooksByAuthor(author);
            if (books.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
