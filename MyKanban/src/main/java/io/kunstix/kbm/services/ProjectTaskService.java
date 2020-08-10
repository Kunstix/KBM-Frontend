package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.Backlog;
import io.kunstix.kbm.domain.ProjectTask;
import io.kunstix.kbm.exceptions.ProjectNotFoundException;
import io.kunstix.kbm.repositories.BacklogRepository;
import io.kunstix.kbm.repositories.ProjectRepository;
import io.kunstix.kbm.repositories.ProjectTaskRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRespository projectTaskRepository;


    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask createProjectTask(String projectID, ProjectTask projectTask) {
        Backlog backlog = backlogRepository.findByProjectID(projectID);

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID <" + projectID + "> does not exist");
        }

        projectTask.setBacklog(backlog);
        backlog.setPTSequence(backlog.getPTSequence() + 1);
        projectTask.setProjectID(projectID);
        projectTask.setProjectSequence(backlog.getProjectID() + "-" + backlog.getPTSequence());

        if (projectTask.getPriority() == null) {
            projectTask.setPriority(TaskPriority.MEDIUM);
        }
        if (projectTask.getStatus() == null) {
            projectTask.setStatus(TaskStatus.TODO);
        }
        return projectTaskRepository.save(projectTask);
    }

    public ProjectTask findProjectTaskByProjectIDAndSequence(String projectID, String sequence) {

        Backlog backlog = backlogRepository.findByProjectID(projectID);

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID <" + projectID + "> does not exist");
        }

        ProjectTask projectTask = projectTaskRepository.findByProjectIDAndProjectSequence(projectID, sequence);

        if (projectTask == null) {
            throw new ProjectNotFoundException("Task with projectID <" + projectID + "> and sequence <" + sequence + "> does not exist");
        }

        return projectTask;
    }

    public ProjectTask updateByProjectIDAndSequence(ProjectTask updatedTask, String projectID, String sequence) {
        findProjectTaskByProjectIDAndSequence(projectID, sequence);
        return projectTaskRepository.save(updatedTask);

    }

    public void deleteTaskByProjectIDAndSequence(String projectID, String sequence) {
        ProjectTask projectTask = findProjectTaskByProjectIDAndSequence(projectID, sequence);
        projectTaskRepository.delete(projectTask);
    }

    public Iterable<ProjectTask> findBacklogById(String projectID) {
        if (projectRepository.findByProjectID(projectID) == null) {
            throw new ProjectNotFoundException("Project with ID <" + projectID + "> does not exist");
        }
        return projectTaskRepository.findByProjectIDOrderByPriority(projectID);
    }
}
