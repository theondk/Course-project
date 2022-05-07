package com.kezik.territorialDistribution.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class HistoryKezik extends BaseModelFields {
    private String name;
    private String description;
    private String state;
    private String price;

    @ManyToOne()
    UserKezik user;

    public HistoryKezik() { }

    public HistoryKezik(HistoryKezik historyKezik) {
        this.setId(historyKezik.getId());
        this.name = historyKezik.getName();
        this.description = historyKezik.getDescription();
        this.state = historyKezik.getState();
        this.price = historyKezik.getPrice();
        this.user = historyKezik.getUser();
    }

    public HistoryKezik(String name, String description, String state, String price, UserKezik user) {
        this.name = name;
        this.description = description;
        this.state = state;
        this.price = price;
        this.user = user;
    }
}