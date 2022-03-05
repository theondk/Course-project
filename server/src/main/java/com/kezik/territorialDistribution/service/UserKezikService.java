package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.UserKezik;

import java.util.List;

public interface UserKezikService {
    public boolean saveUser(UserKezik userKezik);
    public List<UserKezik> getAllUsers();
    public boolean authUser(UserKezik userKezik);
}
