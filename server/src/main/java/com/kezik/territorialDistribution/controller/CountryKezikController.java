package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.CountryKezik;
import com.kezik.territorialDistribution.service.CountryKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/country")
public class CountryKezikController {

    @Autowired
    private CountryKezikService countryKezikService;

    @PostMapping("/add")
    public String saveCountry(@RequestBody CountryKezik countryKezik) {
        countryKezikService.saveCountry(countryKezik);
        return "country created";
    }

    @GetMapping("/getAll")
    public List<CountryKezik> getCountry() {
        return countryKezikService.getCountries();
    }

    @GetMapping("/getAll/{id}")
    public Optional<CountryKezik> getCountryById(Integer id) {
        return countryKezikService.getCountryById(id);
    }

    @DeleteMapping("/deleteOne/{id}")
    public String deleteCountry(@PathVariable int id) {
        countryKezikService.deleteCountry(id);
        return "country removed";
    }
}