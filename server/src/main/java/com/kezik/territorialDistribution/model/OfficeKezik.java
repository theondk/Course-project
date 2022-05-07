package com.kezik.territorialDistribution.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class OfficeKezik extends BaseModelFields {
    private String city;

    @ManyToOne()
    private CountryKezik country;

    @OneToMany()
    List<UserKezik> user;

    public OfficeKezik() { }

    public OfficeKezik(OfficeKezik officeKezik) {
        this.setId(officeKezik.getId());
        this.country = officeKezik.getCountry();
    }

    public OfficeKezik(String city, CountryKezik country) {
        this.city = city;
        this.country = country;
    }
}