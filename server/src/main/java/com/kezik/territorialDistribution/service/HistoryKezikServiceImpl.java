package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.HistoryKezik;
import com.kezik.territorialDistribution.repository.HistoryKezikRepository;
import com.kezik.territorialDistribution.repository.TaskKezikRepository;
import com.kezik.territorialDistribution.repository.UserKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryKezikServiceImpl implements HistoryKezikService {

    @Autowired
    private HistoryKezikRepository historyKezikRepository;
    @Autowired
    private UserKezikRepository userKezikRepository;
    @Autowired
    private TaskKezikRepository taskKezikRepository;

    @Override
    public HistoryKezik saveInHistory(HistoryKezik historyKezik, int taskId, int userId) {
        historyKezik.setUser(userKezikRepository.getById(userId));
        return historyKezikRepository.save(historyKezik);
    }

    @Override
    public List<HistoryKezik> getHistory() {
        return historyKezikRepository.findAll();
    }

    @Override
    public void deleteFromHistory(int id) {
        historyKezikRepository.deleteById(id);
    }
}
