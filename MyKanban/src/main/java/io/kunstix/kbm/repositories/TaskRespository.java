package io.kunstix.kbm.repositories;

import io.kunstix.kbm.domain.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRespository extends CrudRepository<Task, Long> {

    Task findBySequence(String sequence);

    Task findByProjectIDAndSequence(String projectID, String sequence);

    Iterable<Task> findByProjectIDOrderByPriority(String projectID);
}
