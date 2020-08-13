package io.kunstix.kbm.exceptions;

public class ProjectAlreadyExistsResponse {

    private String projectID;

    public ProjectAlreadyExistsResponse(String projectID) {
        this.projectID = projectID;
    }

    public String getProjectID() {
        return projectID;
    }

    public void setProjectID(String projectID) {
        this.projectID = projectID;
    }
}
