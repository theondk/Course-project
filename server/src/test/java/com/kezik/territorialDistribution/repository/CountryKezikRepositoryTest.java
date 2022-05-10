package com.kezik.territorialDistribution.repository;

import com.kezik.territorialDistribution.TerritorialDistributionApplication;
import com.kezik.territorialDistribution.model.CountryKezik;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;

@SpringBootTest
@RunWith(SpringRunner.class)
public class CountryKezikRepositoryTest {

    @Autowired
    private CountryKezikRepository countryKezikRepository;

    @Test
    public void testGetByIdExistingUser() {
        Optional<CountryKezik> byId = countryKezikRepository.findById(2);
        Assert.assertNotNull(byId);
    }

    @Test
    public void testSaveUserInDB() {
        CountryKezik save = countryKezikRepository.save(new CountryKezik());
        Assert.assertNotNull(save);
    }

    @Test
    public void testFindByIdNotExistingUser() {
        Optional<CountryKezik> byId = countryKezikRepository.findById(222);
        Assert.assertFalse(byId.isPresent());
    }

    @Test
    public void testFindAllUsers() {
        List<CountryKezik> all = countryKezikRepository.findAll();
        Assert.assertNotNull(all);
    }
}