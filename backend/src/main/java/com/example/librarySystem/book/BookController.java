package com.example.librarySystem.book;
import com.example.librarySystem.publisher.PublisherService;
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
    private final PublisherService publisherService;

    @PostMapping
    public ResponseEntity<String> createBook(@RequestBody Book book) {
        try{
            System.out.println("I'm In Create");
            System.out.println(book);
            if(book.getPublicationYear().length() != 4)
                return new ResponseEntity<>("Publication Year must be 4 letters.", HttpStatus.BAD_REQUEST);

            if(book.getPrice() < 0)
                return new ResponseEntity<>("Price can't be negative.", HttpStatus.BAD_REQUEST);

            if(book.getThreshold() < 0)
                return new ResponseEntity<>("Threshold can't be negative.", HttpStatus.BAD_REQUEST);

            if(book.getStockQuantity() < 0)
                return new ResponseEntity<>("Quantity can't be negative.", HttpStatus.BAD_REQUEST);

            book.setCoverImage(bookService.StorePhotoInPath(book.getCoverImage(), book.getIsbn()));
            bookService.createBook(book);
            return new ResponseEntity<>("Book was created successfully.", HttpStatus.CREATED);
        }
        catch(Exception e){
            if (!publisherService.publisherExists(book.getPublisherName()))
                return new ResponseEntity<>("Publisher Not Found.", HttpStatus.BAD_REQUEST);
            if (bookService.BookExists(book.getIsbn()))
                return new ResponseEntity<>("ISBN already in use.", HttpStatus.BAD_REQUEST);
            if (bookService.BookExistsByTitle(book.getTitle()))
                return new ResponseEntity<>("Another book has the same title.", HttpStatus.BAD_REQUEST);
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

            if(book.getPublicationYear().length() != 4)
                return new ResponseEntity<>("Publication Year must be 4 letters.", HttpStatus.BAD_REQUEST);

            if(book.getPrice() < 0)
                return new ResponseEntity<>("Price can't be negative.", HttpStatus.BAD_REQUEST);

            if(book.getThreshold() < 0)
                return new ResponseEntity<>("Threshold can't be negative.", HttpStatus.BAD_REQUEST);

            if(book.getStockQuantity() < 0)
                return new ResponseEntity<>("Quantity can't be negative.", HttpStatus.BAD_REQUEST);
            book.setCoverImage(bookService.StorePhotoInPath(book.getCoverImage(), book.getIsbn()));
            bookService.editBook(isbn, book);
            return new ResponseEntity<>("Book edited successfully", HttpStatus.OK);
        } catch (Exception e) {

            if (!publisherService.publisherExists(book.getPublisherName()))
                return new ResponseEntity<>("Publisher Not Found.", HttpStatus.BAD_REQUEST);
            if (bookService.BookExistsByTitle(book.getTitle()))
                return new ResponseEntity<>("Another book has the same title.", HttpStatus.BAD_REQUEST);

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
