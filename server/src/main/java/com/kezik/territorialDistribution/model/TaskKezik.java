package com.kezik.territorialDistribution.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class TaskKezik extends BaseModelFields {
    private String name;
    private String description;
    private int price;

    @ManyToOne()
    UserKezik user;

    public TaskKezik() { }

    public TaskKezik(TaskKezik taskKezik) {
        this.setId(taskKezik.getId());
        this.name = taskKezik.getName();
        this.description = taskKezik.getDescription();
        this.price = taskKezik.getPrice();
        this.user = taskKezik.getUser();
    }

    public TaskKezik(String name, String description, int price, UserKezik user) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.user = user;
    }
}
