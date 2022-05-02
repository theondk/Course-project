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

    @PostMapping("/add")
    public String saveInHistory(@RequestBody HistoryKezik historyKezik) {
        historyKezikService.saveInHistory(historyKezik);
        return "territory was create";
    }

    @GetMapping("/getAll")
    public List<HistoryKezik> getHistory() {
        return historyKezikService.getHistory();
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteFromHistory(@PathVariable int id) {
        historyKezikService.deleteFromHistory(id);
        return "territory removed from history";
    }
}
