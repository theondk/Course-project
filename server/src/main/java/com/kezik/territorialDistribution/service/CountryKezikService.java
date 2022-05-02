package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.CountryKezik;

import java.util.List;
import java.util.Optional;

public interface CountryKezikService {
    public CountryKezik saveCountry(CountryKezik countryKezik);
    public List<CountryKezik> getCountries();
    public Optional<CountryKezik> getCountryById(Integer id);
    public void deleteCountry(int id);
}
