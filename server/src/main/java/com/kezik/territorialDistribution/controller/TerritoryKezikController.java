package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import com.kezik.territorialDistribution.service.TerritoryKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/territory")
public class TerritoryKezikController {
    @Autowired
    private TerritoryKezikService territoryKezikService;

    @PostMapping("/add")
    public String add(@RequestBody TerritoryKezik territoryKezik) {
        territoryKezikService.saveTerritory(territoryKezik);
        return "new territory was created";
    }

    @GetMapping("/getAll")
    public List<TerritoryKezik> getAllTerritories(@RequestParam(required = false, defaultValue = "0") Integer offset, @RequestParam(required = false, defaultValue = "0") Integer limit) {
        return territoryKezikService.getAllTerritories(offset, limit);
    }

    @GetMapping("/getCount")
    public int getAllTerritories() {
        return territoryKezikService.getTerritoriesCount();
    }

    @GetMapping("/getAll/{id}")
    public Optional<TerritoryKezik> getTerritoryById(@PathVariable Integer id) {
        return territoryKezikService.getTerritoryById(id);
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteTerritroy(@PathVariable int id) {
        territoryKezikService.deleteTerritory(id);
        return "territory was deleted";
    }

    @PutMapping("/edit/{id}")
    public String edit(@PathVariable Integer id, @RequestBody TerritoryKezik territoryKezik) {
        territoryKezikService.editTerritory(id, territoryKezik);
        return "territory was updated";
    }
}
