package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.TaskKezik;
import com.kezik.territorialDistribution.service.TaskKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/task")
public class TaskKezikController {

    @Autowired
    private TaskKezikService taskKezikService;

    @PostMapping("/add/{userId}")
    public String add(@RequestBody TaskKezik taskKezik, @PathVariable int userId) {
        taskKezikService.saveTask(taskKezik, userId);
        return "new task created";
    }

    @GetMapping("/getByUserId/{id}")
    public List<TaskKezik> getTasksByUserId(@PathVariable Integer id) {
        return taskKezikService.getTasksByUserId(id);
    }

    @GetMapping("/getAll")
    public List<TaskKezik> getAllTasks() {
        return taskKezikService.getAllTasks();
    }

    @GetMapping("/getCount")
    public int getTasksCount() {
        return taskKezikService.getTasksCount();
    }

    @GetMapping("/getAll/{id}")
    public TaskKezik getTaskById(@PathVariable Integer id) {
        return taskKezikService.getTaskById(id);
    }

    @DeleteMapping("/deleteOne/{id}")
    public Boolean manageTask(@PathVariable int id) {
        return taskKezikService.deleteTask(id);
    }

    @PutMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, @RequestBody TaskKezik taskKezik) {
        taskKezikService.editTask(id, taskKezik);
        return "task updated";
    }
}
