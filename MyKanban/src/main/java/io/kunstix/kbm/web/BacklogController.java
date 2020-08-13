package io.kunstix.kbm.web;

import io.kunstix.kbm.domain.Task;
import io.kunstix.kbm.services.TaskService;
import io.kunstix.kbm.services.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private TaskService projectTaskService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("/{projectID}")
    public ResponseEntity<?> createProjectTaskToBacklog(@Valid @RequestBody Task task, BindingResult result,
                                                        @PathVariable String projectID, Principal principal) {

        Optional<ResponseEntity<?>> errorResult = validationErrorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        Task newProject = projectTaskService.createProjectTask(projectID.toUpperCase(), task, principal.getName());

        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectID}")
    public Iterable<Task> getBacklog(@PathVariable String projectID, Principal principal) {
        return projectTaskService.findBacklogById(projectID.toUpperCase(), principal.getName());
    }

    @GetMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> getTask(@PathVariable String projectID, @PathVariable String sequence, Principal principal) {
        Task task = projectTaskService.findProjectTaskByProjectIDAndSequence(projectID.toUpperCase(), sequence, principal.getName());
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    @PatchMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> updateTask(@Valid @RequestBody Task updatedTask, BindingResult result,
                                        @PathVariable String projectID, @PathVariable String sequence, Principal principal) {

        Optional<ResponseEntity<?>> errorResult = validationErrorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        projectTaskService.updateByProjectIDAndSequence(updatedTask, projectID, sequence, principal.getName());
        return new ResponseEntity<>(updatedTask, HttpStatus.OK);
    }

    @DeleteMapping("/{projectID}/{sequence}")
    public ResponseEntity<?> deleteTask(@PathVariable String projectID, @PathVariable String sequence, Principal principal) {
        projectTaskService.deleteTaskByProjectIDAndSequence(projectID, sequence, principal.getName());
        return new ResponseEntity<>("Task with projectID <" + projectID + "> and sequence <" + sequence + "> was deleted successfully", HttpStatus.OK);
    }
}
