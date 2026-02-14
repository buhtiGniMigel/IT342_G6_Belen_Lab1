package com.lab1.Belen_IT342_G6_URA.repository;

import com.lab1.Belen_IT342_G6_URA.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}