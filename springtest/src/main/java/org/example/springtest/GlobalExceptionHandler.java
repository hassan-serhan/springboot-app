package org.example.springtest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler extends RuntimeException {
  @ExceptionHandler(ItemNotFoundException.class)
  public ResponseEntity<String> handleItemNotFoundException(ItemNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
  }
  @ExceptionHandler(NameNotFoundException.class)
  public ResponseEntity<String> handleNameNotFoundException(NameNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<String> handleGenericException(Exception ex) {
    return ResponseEntity.status(500).body("Internal Server Error: " + ex.getMessage());
  }
}
