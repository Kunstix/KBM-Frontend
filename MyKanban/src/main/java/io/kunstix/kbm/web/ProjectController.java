package io.kunstix.kbm.web;

import io.kunstix.kbm.domain.Project;
import io.kunstix.kbm.services.ProjectService;
import io.kunstix.kbm.services.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult result) {

        Optional<ResponseEntity<?>> errorResult = validationErrorService.validate(result);
        if (errorResult.isPresent()) return errorResult.get();

        Project savedProject = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectID}")
    public ResponseEntity<?> loadProject(@PathVariable String projectID) {
        Project loadedProject = projectService.loadProject(projectID);
        return new ResponseEntity<Project>(loadedProject, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> loadProjects() {
        return projectService.loadAllProjects();
    }

    @DeleteMapping("/{projectID}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectID) {
        projectService.deleteProject(projectID);
        return new ResponseEntity<>("Project with ID <" + projectID + "> was deleted successfully", HttpStatus.OK);
    }
}
