package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TaskKezik;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import java.util.Optional;

import static org.junit.Assert.*;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class TaskKezikServiceImplTest {

    @Autowired
    private TaskKezikService taskKezikService;

    @Test
    public void testGetTaskForUserWhenTaskExist() {
        TaskKezik taskById = taskKezikService.getTaskById(2);
        Assert.assertTrue(taskById.getId() != 0);
    }

    @Test
    public void testGetTaskForUserWhenTaskNotExist() {
        taskKezikService.getTaskById(0);
    }

    @Test
    @Rollback
    public void testAddTaskForUserWhenUserExist() {
        TaskKezik task = new TaskKezik();
        task.setDescription("smth");
        taskKezikService.saveTask(task,3);
    }

    @Test(expected = Exception.class)
    @Rollback
    public void testAddTaskForUserWhenUserNotExist() {
        TaskKezik task = new TaskKezik();
        task.setDescription("smth");
        taskKezikService.saveTask(task,0);
    }
}