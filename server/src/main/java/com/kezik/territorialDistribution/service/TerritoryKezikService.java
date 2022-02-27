package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TerritoryKezikService {
    public TerritoryKezik saveTerritory(TerritoryKezik territoryKezik);
    public List<TerritoryKezik> getAllTerritories(Integer offset, Integer limit);
    public int getTerritoriesCount();
    public ResponseEntity<TerritoryKezik> getTerritoryById(Integer id);
    public void deleteTerritory(int id);
}
