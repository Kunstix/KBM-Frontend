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

        ProjectTask newProject = projectTaskService.createProjectTask(projectID.toUpperCase(), projectTask);

        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectID}")
    public Iterable<ProjectTask> getBacklog(@PathVariable String projectID) {
        return projectTaskService.findBacklogById(projectID.toUpperCase());
    }

    @GetMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> getTask(@PathVariable String projectID, @PathVariable String sequence) {
        ProjectTask projectTask = projectTaskService.findProjectTaskByProjectIDAndSequence(projectID.toUpperCase(), sequence);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }

    @PatchMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> updateTask(@Valid @RequestBody ProjectTask updatedTask, BindingResult result,
                                        @PathVariable String projectID, @PathVariable String sequence) {

        Optional<ResponseEntity<?>> errorResult = validationErrorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        projectTaskService.updateByProjectIDAndSequence(updatedTask, projectID, sequence);
        return new ResponseEntity<>(updatedTask, HttpStatus.OK);
    }

    @DeleteMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> deleteTask(@PathVariable String projectID, @PathVariable String sequence) {
        projectTaskService.deleteTaskByProjectIDAndSequence(projectID, sequence);
        return new ResponseEntity<>("Task with projectID <" + projectID + "> and sequence <" + sequence + "> was deleted successfully", HttpStatus.OK);
    }
}
