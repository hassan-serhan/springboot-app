package org.example.springtest;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Item {
    @Getter
    @Setter
    @Id
    private String id;
    @Getter
    @Setter
    @NotNull
    private String name;
    @Getter
    @Setter
    private String description;
}
