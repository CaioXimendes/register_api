package com.apicadastro.api_cadastro_backend.repository;

import com.apicadastro.api_cadastro_backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String user_name);
    User findByAccountNumber(int accountNumber);

    //User setAmount(double amount);
}
