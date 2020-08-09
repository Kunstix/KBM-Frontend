package io.kunstix.kbm.services;

import io.kunstix.kbm.domain.Backlog;
import io.kunstix.kbm.domain.ProjectTask;
import io.kunstix.kbm.repositories.BacklogRepository;
import io.kunstix.kbm.repositories.ProjectTaskRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRespository projectTaskRepository;

    public ProjectTask createProjectTask(String projectID, ProjectTask projectTask) {
        Backlog backlog = backlogRepository.findByProjectID(projectID.toUpperCase());
        projectTask.setBacklog(backlog);
        backlog.setPTSequence(backlog.getPTSequence()+1);
        projectTask.setProjectID(projectID.toUpperCase());
        projectTask.setProjectSequence(backlog.getProjectID()+"-"+backlog.getPTSequence());

        if(projectTask.getPriority() == null) {
            projectTask.setPriority(TaskPriority.MEDIUM);
        }
        if(projectTask.getStatus() == null) {
            projectTask.setStatus(TaskStatus.TODO);
        }
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findBacklogById(String projectID) {
        return projectTaskRepository.findByProjectIDOrderByPriority(projectID);
    }
}
