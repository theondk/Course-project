package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.HistoryKezik;

import java.util.List;

public interface HistoryKezikService {
    public HistoryKezik saveInHistory(HistoryKezik historyKezik);
    public List<HistoryKezik> getHistory();
    public void deleteFromHistory(int id);
}
