package io.kunstix.kbm.exceptions;

public class UserAlreadyExistsResponse {

    private String username;

    public UserAlreadyExistsResponse(String username) {
        this.username = username;
    }

    public String getMessage() {
        return username;
    }

    public void setMessage(String username) {
        this.username = username;
    }
}
