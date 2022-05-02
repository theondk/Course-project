package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.HistoryKezik;
import com.kezik.territorialDistribution.model.TaskKezik;
import com.kezik.territorialDistribution.repository.HistoryKezikRepository;
import com.kezik.territorialDistribution.repository.TaskKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskKezikServiceImpl implements TaskKezikService {

    @Autowired
    private TaskKezikRepository taskKezikRepository;
    private HistoryKezikRepository historyKezikRepository;

    @Override
    public TaskKezik saveTask(TaskKezik taskKezik) {
        return taskKezikRepository.save(taskKezik);
    }

    @Override
    public List<TaskKezik> getAllTasks() {
        return taskKezikRepository.findAll();
    }

    @Override
    public int getTasksCount() {
        return (int) taskKezikRepository.count();
    }

    @Override
    public Optional<TaskKezik> getTaskById(Integer id) {
        return taskKezikRepository.findById(id);
    }

    @Override
    public void deleteTask(int id) {
        taskKezikRepository.deleteById(id);
    }

    @Override
    public TaskKezik editTask(int id, TaskKezik officeKezik) {
        return taskKezikRepository.save(officeKezik);
    }

    @Override
    public List<TaskKezik> getTasksByUserId(Integer id) {
        return taskKezikRepository.findAllByUserId(id);
    }
}
