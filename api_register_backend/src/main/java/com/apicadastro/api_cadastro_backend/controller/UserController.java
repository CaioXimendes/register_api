package com.apicadastro.api_cadastro_backend.controller;

import com.apicadastro.api_cadastro_backend.domain.User;
import com.apicadastro.api_cadastro_backend.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    /*@Autowired
    private ResponseEntity responseEntity;*/

    /*public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }*/

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/register")
    public List<User> getAll(){
        return userRepository.findAll();
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/register")
    public User saveUser(@Valid @RequestBody User userEntity){

        Random randomNumber = new Random();
        int randomInt= randomNumber.nextInt(9999);
        userEntity.setAccountNumber(randomInt);

        return userRepository.save(userEntity);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@Valid @RequestBody User userEntity){
        User existingUser = userRepository.findByUsername(userEntity.getUsername());

        if (existingUser != null && existingUser.getPassword().equals(userEntity.getPassword())){
            return ResponseEntity.ok("Usuario Logado com Sucesso!");
        }
        else{
            return ResponseEntity.status(401).body("Usuario ou senha inválidos");
        }
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable("id") Long id, @RequestBody User userEntity){
        return userRepository.save(userEntity);
    }
    /*@DeleteMapping("/{id}")
    public Optional<User> deleteUser(@PathVariable("id") Long id){
        Optional <User> deletedUser = userRepository.findById(id);
        userRepository.deleteById(id);
        return deletedUser;
    }*/

    /*@DeleteMapping("/id")
    public ResponseEntity deleteUserById(@PathVariable("id") Long id){
        userRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }*/

}
