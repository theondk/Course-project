package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.HistoryKezik;
import com.kezik.territorialDistribution.service.HistoryKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/history")
public class HistoryKezikController {

    @Autowired
    private HistoryKezikService historyKezikService;

    @PostMapping("/add/{taskId}/{userId}")
    public HistoryKezik saveInHistory(@RequestBody HistoryKezik historyKezik, @PathVariable  int taskId, @PathVariable int userId) {
        return historyKezikService.saveInHistory(historyKezik, taskId, userId);
    }

    @GetMapping("/getAll")
    public List<HistoryKezik> getHistory() {
        return historyKezikService.getHistory();
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteFromHistory(@PathVariable int id) {
        historyKezikService.deleteFromHistory(id);
        return "task removed from history";
    }
}
