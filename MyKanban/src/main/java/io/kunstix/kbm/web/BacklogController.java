package io.kunstix.kbm.web;

import io.kunstix.kbm.domain.ProjectTask;
import io.kunstix.kbm.services.ProjectTaskService;
import io.kunstix.kbm.services.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("/{projectID}")
    public ResponseEntity<?> createProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result, @PathVariable String projectID) {

        Optional<ResponseEntity<?>> errorResult = validationErrorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        ProjectTask newProject = projectTaskService.createProjectTask(projectID, projectTask);

        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectID}")
    public Iterable<ProjectTask> getBacklog(@PathVariable String projectID) {
        return projectTaskService.findBacklogById(projectID.toUpperCase());
    }
}
