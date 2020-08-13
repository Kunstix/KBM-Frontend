package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.Backlog;
import io.kunstix.kbm.domain.Task;
import io.kunstix.kbm.exceptions.ProjectNotFoundException;
import io.kunstix.kbm.repositories.BacklogRepository;
import io.kunstix.kbm.repositories.ProjectRepository;
import io.kunstix.kbm.repositories.TaskRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class TaskService {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private TaskRespository projectTaskRepository;


    @Autowired
    private ProjectRepository projectRepository;

    public Task createProjectTask(String projectID, Task task, String username) {
        Backlog backlog = projectService.loadProject(projectID, username).getBacklog();

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID <" + projectID + "> does not exist");
        }

        task.setBacklog(backlog);
        backlog.setPTSequence(backlog.getPTSequence() + 1);
        task.setProjectID(projectID);
        task.setSequence(backlog.getProjectID() + "-" + backlog.getPTSequence());

        if (task.getPriority() == null) {
            task.setPriority(TaskPriority.MEDIUM);
        }
        if (task.getStatus() == null) {
            task.setStatus(TaskStatus.TODO);
        }
        return projectTaskRepository.save(task);
    }

    public Task findProjectTaskByProjectIDAndSequence(String projectID, String sequence, String username) {

        Backlog backlog = projectService.loadProject(projectID, username).getBacklog();

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID <" + projectID + "> does not exist");
        }

        Task task = projectTaskRepository.findByProjectIDAndSequence(projectID, sequence);

        if (task == null) {
            throw new ProjectNotFoundException("Task with projectID <" + projectID + "> and sequence <" + sequence + "> does not exist");
        }

        return task;
    }

    public Task updateByProjectIDAndSequence(Task updatedTask, String projectID, String sequence, String username) {
        findProjectTaskByProjectIDAndSequence(projectID, sequence, username);
        return projectTaskRepository.save(updatedTask);

    }

    public void deleteTaskByProjectIDAndSequence(String projectID, String sequence, String username) {
        Task task = findProjectTaskByProjectIDAndSequence(projectID, sequence, username);
        projectTaskRepository.delete(task);
    }

    public Iterable<Task> findBacklogById(String projectID, String username) {
        projectService.loadProject(projectID, username);
        return projectTaskRepository.findByProjectIDOrderByPriority(projectID);
    }
}
