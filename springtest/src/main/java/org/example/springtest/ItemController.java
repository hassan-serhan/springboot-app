package org.example.springtest;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping
    public ResponseEntity<Void> addItem(@RequestBody Item item) {
        if(item.getName() != null && !item.getName().isEmpty()) {
            itemRepository.save(item);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        throw new NameNotFoundException("Name is required and cannot be empty.");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id) {
        Optional<Item> item = itemRepository.findById(id);
        if (item.isPresent()) {
            return ResponseEntity.ok(item.get());
        }
        throw new ItemNotFoundException("Item with ID " + id + " not found");
    }
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemRepository.findAll();
        return ResponseEntity.ok(items);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateItem(@PathVariable String id, @RequestBody Item item) {
        Optional<Item> itemOptional = itemRepository.findById(id);
        if (itemOptional.isPresent()) {
            Item x = itemOptional.get();
            x.setName(item.getName());
            x.setDescription(item.getDescription());
            itemRepository.save(x);
            return ResponseEntity.noContent().build();
        }
        throw new ItemNotFoundException("Item with ID " + id + " not found");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        Optional<Item> item = itemRepository.findById(id);
        if (item.isPresent()) {
            itemRepository.delete(item.get());
            return ResponseEntity.noContent().build();
        }
        throw new ItemNotFoundException("Item with ID " + id + " not found");
    }
}
