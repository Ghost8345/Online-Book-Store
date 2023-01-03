package com.example.librarySystem.book;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Book {
    @Id
    private int isbn;
    private String title;
    @Column("publisherName")
    private String publisherName;
    private String authors;
    @Column("publicationYear")
    private String publicationYear;
    @Column("coverImage")
    private String coverImage;
    private float price;
    // Category Enum
    private Category category;
    private int threshold;
    @Column("stockQuantity")
    private int stockQuantity;



}
