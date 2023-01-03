package com.example.librarySystem.publisher;
import lombok.*;
import org.springframework.data.annotation.Id;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Publisher {
    @Id
    private String name;
    private String address;
    private String phone;

}
