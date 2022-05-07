package com.kezik.territorialDistribution.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
public class CountryKezik extends BaseModelFields {
    private String name;

    @OneToMany()
    List<OfficeKezik> office;

    public CountryKezik() { }

    public CountryKezik(CountryKezik country) {
        this.name = country.getName();
    }

    public CountryKezik(String name) {
        this.name = name;
    }
}