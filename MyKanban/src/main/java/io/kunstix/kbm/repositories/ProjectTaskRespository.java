package io.kunstix.kbm.repositories;

import io.kunstix.kbm.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectTaskRespository extends CrudRepository<ProjectTask, Long> {

    ProjectTask findByProjectSequence(String sequence);

    ProjectTask findByProjectIDAndProjectSequence(String projectID, String sequence);

    Iterable<ProjectTask> findByProjectIDOrderByPriority(String projectID);
}
