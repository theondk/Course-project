package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TaskKezik;

import java.util.List;
import java.util.Optional;

public interface TaskKezikService {
    public TaskKezik saveTask(TaskKezik taskKezik, int userId);
    public List<TaskKezik> getAllTasks();
    public int getTasksCount();
    public Optional<TaskKezik> getTaskById(Integer id);
    public void deleteTask(int id);
    public TaskKezik editTask(int id, TaskKezik taskKezik);
    public List<TaskKezik> getTasksByUserId(Integer id);
}

