package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.UserKezik;
import com.kezik.territorialDistribution.repository.UserKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserKezikServiceImpl implements UserKezikService {
    @Autowired
    private UserKezikRepository userKezikRepository;

    @Override
    public boolean saveUser(UserKezik userKezik) {
        List<UserKezik> users = userKezikRepository.findAll();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername())) {
                return false;
            }
        }

        userKezik.setRole("USER");
        userKezikRepository.save(userKezik);
        return true;
    }

    @Override
    public List<UserKezik> getAllUsers() {
        return userKezikRepository.findAll();
    }

    @Override
    public boolean authUser(UserKezik userKezik) {
        List<UserKezik> users = userKezikRepository.findAll();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername()) && users.get(i).getPassword().equals(userKezik.getPassword())) {
                return true;
            }
        }
        return false;
    }
}
