package io.kunstix.kbm.exceptions;

public class ProjectNotFountExceptionResponse {

    private String projectNotFound;

    public ProjectNotFountExceptionResponse(String projectNotFound) {
        this.projectNotFound = projectNotFound;
    }

    public String getProjectNotFound() {
        return projectNotFound;
    }

    public void setProjectNotFound(String projectNotFound) {
        this.projectNotFound = projectNotFound;
    }
}
