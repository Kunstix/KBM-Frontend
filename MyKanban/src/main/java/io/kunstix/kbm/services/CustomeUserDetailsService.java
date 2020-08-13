package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.User;
import io.kunstix.kbm.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CustomeUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null) throw new UsernameNotFoundException("User <" + username + "> does not exist.");
        return user;
    }

    @Transactional
    public User loadUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if(!user.isPresent()) throw new UsernameNotFoundException("User with id <" + id + "> does not exist.");
        return user.get();
    }
}
