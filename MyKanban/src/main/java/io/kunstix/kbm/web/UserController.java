package io.kunstix.kbm.web;

import io.kunstix.kbm.domain.User;
import io.kunstix.kbm.payload.JWTLoginResponse;
import io.kunstix.kbm.payload.LoginRequest;
import io.kunstix.kbm.security.JWTTokenProvider;
import io.kunstix.kbm.services.UserService;
import io.kunstix.kbm.services.ValidationErrorService;
import io.kunstix.kbm.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

import static io.kunstix.kbm.services.SecurityConstants.TOKEN_PREFIX;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private JWTTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager auth;

    @Autowired
    private ValidationErrorService errorService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        Optional<ResponseEntity<?>> errorResult = errorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        Authentication authentication = auth.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginResponse(true, jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
        userValidator.validate(user, result);

        Optional<ResponseEntity<?>> errorResult = errorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        User newUser = userService.createUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }
}
