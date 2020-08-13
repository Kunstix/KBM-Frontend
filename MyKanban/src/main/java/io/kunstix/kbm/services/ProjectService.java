package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.Project;
import io.kunstix.kbm.domain.User;
import io.kunstix.kbm.exceptions.ProjectAlreadyExistsException;
import io.kunstix.kbm.exceptions.ProjectNotFoundException;
import io.kunstix.kbm.repositories.BacklogRepository;
import io.kunstix.kbm.repositories.ProjectRepository;
import io.kunstix.kbm.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username) {
        String projectID = project.getProjectID().toUpperCase();
        if (project.getId() != null) {
            loadProject(projectID, username);
        }

        try {
            User user = userRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(username);
            project.setProjectID(projectID);

            if (project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectID(projectID));
            }

            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectAlreadyExistsException("Project ID <" + projectID + "> has to be unique.");
        }

    }

    public Project loadProject(String projectID, String username) {

        String pID = projectID.toUpperCase();
        Project loadedProject = projectRepository.findByProjectID(pID);
        if (loadedProject == null) {
            throw new ProjectNotFoundException("Project with ID <" + pID + "> does not exist.");
        }
        if (!loadedProject.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project <" + pID + "> not found in your account.");
        }

        return loadedProject;
    }

    public Iterable<Project> loadAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProject(String projectID, String name) {
        projectRepository.delete(loadProject(projectID.toUpperCase(), name));
    }
}
