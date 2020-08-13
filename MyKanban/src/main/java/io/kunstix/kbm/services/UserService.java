package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.User;
import io.kunstix.kbm.exceptions.UserAlreadyExistsException;
import io.kunstix.kbm.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User createUser(User newUser) {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            newUser.setConfirmPassword("");
        try {
            return userRepository.save(newUser);
        } catch (Exception ex) {
            throw new UserAlreadyExistsException("User <" + newUser.getUsername() + "> already exists.");
        }
    }
}
