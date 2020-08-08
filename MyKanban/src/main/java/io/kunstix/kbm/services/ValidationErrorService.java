package io.kunstix.kbm.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class ValidationErrorService {

     public Optional<ResponseEntity<?>> validate(BindingResult result) {
         if (result.hasErrors()) {
             Map<String, String> errorMap = new HashMap<>();
             result.getFieldErrors().forEach(error -> errorMap.put(error.getField(), error.getDefaultMessage()));
             return Optional.of(new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST));
         }
         return Optional.empty();
     }
}
