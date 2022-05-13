package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.UserKezik;

import java.util.List;

public interface UserKezikService {
    public boolean saveUser(UserKezik userKezik);
    public List<UserKezik> getAllUsers();
    public Object authUser(UserKezik userKezik);
    public String deleteUser(Integer id);
    public UserKezik roleHandler(Integer id, String motion);
    public String activateUser(Integer id, Integer officeId);
    public boolean recoverPassword(UserKezik userKezik);
}
