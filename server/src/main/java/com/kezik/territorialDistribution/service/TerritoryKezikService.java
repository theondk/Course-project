package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface TerritoryKezikService {
    public TerritoryKezik saveTerritory(TerritoryKezik territoryKezik);
    public List<TerritoryKezik> getAllTerritories(Integer offset, Integer limit);
    public int getTerritoriesCount();
    public Optional<TerritoryKezik> getTerritoryById(Integer id);
    public void deleteTerritory(int id);
    public TerritoryKezik editTerritory(int id, TerritoryKezik territoryKezik);
}
