package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.CountryKezik;;
import com.kezik.territorialDistribution.repository.CountryKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryKezikServiceImpl implements CountryKezikService {

    @Autowired
    private CountryKezikRepository countryKezikRepository;

    @Override
    public CountryKezik saveCountry(CountryKezik countryKezik) {
        return countryKezikRepository.save(countryKezik);
    }

    @Override
    public List<CountryKezik> getCountries() {
        return countryKezikRepository.findAll();
    }

    @Override
    public Optional<CountryKezik> getCountryById(Integer id) {
        return countryKezikRepository.findById(id);
    }

    @Override
    public void deleteCountry(int id) {
        countryKezikRepository.deleteById(id);
    }
}
