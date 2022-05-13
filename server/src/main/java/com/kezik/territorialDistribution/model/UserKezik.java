package com.kezik.territorialDistribution.model;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class UserKezik extends BaseModelFields {
    private String username;
    private String password;
    private String role;
    private String phrase;
    private String status;

    @ManyToOne()
    OfficeKezik office;

    @OneToMany()
    List<TaskKezik> task;

    @OneToMany()
    List<HistoryKezik> history;

    public UserKezik() { }

    public UserKezik(UserKezik userKezik) {
        this.setId(userKezik.getId());
        this.office = userKezik.getOffice();
        this.password = userKezik.getPassword();
        this.username = userKezik.getUsername();
        this.role = userKezik.getRole();
        this.phrase = userKezik.getPhrase();
        this.status = userKezik.getStatus();
    }

    public UserKezik(String username, String password, String role, String phrase, String status, OfficeKezik office) {
        this.username = username;
        this.password = password;
        this.phrase = phrase;
        this.status = status;
        this.role = role;
        this.office = office;
    }
}