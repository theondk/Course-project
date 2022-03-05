package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import com.kezik.territorialDistribution.repository.TerritoryKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TerritoryKezikServiceImpl implements TerritoryKezikService {

    @Autowired
    private TerritoryKezikRepository territoryKezikRepository;

    @Override
    public TerritoryKezik saveTerritory(TerritoryKezik territoryKezik) {
        return territoryKezikRepository.save(territoryKezik);
    }

    @Override
    public List<TerritoryKezik> getAllTerritories(Integer offset, Integer limit) {
        List<TerritoryKezik> result = new ArrayList<>();
        Page<TerritoryKezik> page = territoryKezikRepository.findAll(PageRequest.of(offset, limit));
        result.addAll(page.getContent());
        return result;
    }

    @Override
    public int getTerritoriesCount() {
        return (int) territoryKezikRepository.count();
    }

    @Override
    public Optional<TerritoryKezik> getTerritoryById(Integer id) {
        return territoryKezikRepository.findById(id);
    }

    @Override
    public void deleteTerritory(int id) {
        territoryKezikRepository.deleteById(id);
    }

    @Override
    public TerritoryKezik editTerritory(int id, TerritoryKezik territoryKezik) {
        territoryKezik.setId(id);
        territoryKezik.setName(territoryKezik.getName());
        territoryKezik.setAddress(territoryKezik.getAddress());
        territoryKezik.setDescription(territoryKezik.getDescription());
        return territoryKezikRepository.save(territoryKezik);
    }
}
