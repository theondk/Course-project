package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import com.kezik.territorialDistribution.service.TerritoryKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/territory")
public class TerritoryKezikController {
    @Autowired
    private TerritoryKezikService territoryKezikService;

    @PostMapping("/add")
    public String add(@RequestBody TerritoryKezik territoryKezik) {
        territoryKezikService.saveTerritory(territoryKezik);
        return "new territory was added";
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
    public ResponseEntity<TerritoryKezik> getTerritoryById(@PathVariable Integer id) {
        return territoryKezikService.getTerritoryById(id);
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteTerritroy(@PathVariable int id) {
        territoryKezikService.deleteTerritory(id);
        return "territory was deleted";
    }
}
