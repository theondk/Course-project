package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TaskKezik;
import com.kezik.territorialDistribution.repository.HistoryKezikRepository;
import com.kezik.territorialDistribution.repository.TaskKezikRepository;
import com.kezik.territorialDistribution.repository.UserKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskKezikServiceImpl implements TaskKezikService {

    @Autowired
    private TaskKezikRepository taskKezikRepository;
    @Autowired
    private HistoryKezikRepository historyKezikRepository;
    @Autowired
    private UserKezikRepository userKezikRepository;

    @Override
    public TaskKezik saveTask(TaskKezik taskKezik, int userId) {
        taskKezik.setUser(userKezikRepository.getById(userId));
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
    public TaskKezik getTaskById(Integer id) {
        return taskKezikRepository.getById(id);
    }

    @Override
    public Boolean deleteTask(int id) {
        taskKezikRepository.deleteById(id);
        return true;
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
