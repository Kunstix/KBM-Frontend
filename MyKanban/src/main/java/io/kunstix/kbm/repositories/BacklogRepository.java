package io.kunstix.kbm.repositories;

import io.kunstix.kbm.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    Backlog findByProjectID(String projectID);
}
