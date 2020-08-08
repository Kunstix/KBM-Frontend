package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.Project;
import io.kunstix.kbm.exceptions.ProjectIdException;
import io.kunstix.kbm.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        try {
            project.setProjectID(project.getProjectID().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID <" + project.getProjectID().toUpperCase() + "> has to be unique.");
        }

    }

    public Project loadProject(String projectID) {

        Project loadedProject = projectRepository.findByProjectID(projectID.toUpperCase());

        if (loadedProject == null) {
            throw new ProjectIdException("Project with ID <" + projectID.toUpperCase() + "> does not exist.");
        }

        return loadedProject;
    }

    public Iterable<Project> loadAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProject(String projectID) {

        Project loadedProject = projectRepository.findByProjectID(projectID.toUpperCase());

        if (loadedProject == null) {
            throw new ProjectIdException("Can not delete project with ID <" + projectID.toUpperCase() + "> because it does not exist.");
        }

        projectRepository.delete(loadedProject);
    }
}
