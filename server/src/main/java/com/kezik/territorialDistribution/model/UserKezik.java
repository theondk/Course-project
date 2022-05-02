package com.kezik.territorialDistribution.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserKezik {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String role;
    private String phrase;
    private String status;
    private int officeId;

    public UserKezik() { }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getUsername() { return username; }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) { this.password = password; }

    public String getRole() {
        return role;
    }

    public void setRole(String role) { this.role = role; }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) { this.status = status; }

    public int getOfficeId() { return officeId; }

    public void setOfficeId(int officeId) { this.officeId = officeId; }

    public String getPhrase() { return phrase; }

    public void setPhrase(String phrase) { this.phrase = phrase; }
}