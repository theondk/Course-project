package com.kezik.territorialDistribution.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseModelFields {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public BaseModelFields(int id) { this.id = id; }

    public BaseModelFields() {}

    public int getId() { return id; }

    public void setId(int id) {
        this.id = id;
    }
}
