package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.OfficeKezik;
import com.kezik.territorialDistribution.service.OfficeKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/office")
public class OfficeKezikController {

    @Autowired
    private OfficeKezikService officeKezikService;

    @PostMapping("/add/{id}")
    public String add(@RequestBody OfficeKezik officeKezik, @PathVariable int id) {
        officeKezikService.saveOffice(officeKezik, id);
        return "new office was create";
    }

    @GetMapping("/getAll")
    public List<OfficeKezik> getAllOfficeses(@RequestParam(required = false, defaultValue = "0") Integer offset, @RequestParam(required = false, defaultValue = "0") Integer limit) {
        return officeKezikService.getAllOffices(offset, limit);
    }

    @GetMapping("/getByFilter")
    public List<OfficeKezik> getAllOfficesByFilter() {
        return officeKezikService.getAllOfficesByFilter();
    }

    @GetMapping("/getCount")
    public int getOfficesCount() {
        return officeKezikService.getOfficesCount();
    }

    @GetMapping("/getAll/{id}")
    public Optional<OfficeKezik> getOfficeById(@PathVariable Integer id) {
        return officeKezikService.getOfficeById(id);
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteOffice(@PathVariable int id) {
        officeKezikService.deleteOffice(id);
        return "office was deleted";
    }

    @PutMapping("/edit/{id}/{countryId}")
    public String edit(@PathVariable Integer id, @RequestBody OfficeKezik officeKezik, @PathVariable int countryId) {
        officeKezikService.editOffice(id, officeKezik, countryId);
        return "office was updated";
    }
}
