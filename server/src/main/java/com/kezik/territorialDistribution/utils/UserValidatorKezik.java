package com.kezik.territorialDistribution.utils;

import com.kezik.territorialDistribution.model.UserKezik;

import java.util.List;

public class UserValidatorKezik {

    public boolean validateUsername(List<UserKezik> users, UserKezik userKezik) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername())) {
                return false;
            }
        }

        return true;
    }

    public UserKezik validateUserData(List<UserKezik> users, UserKezik userKezik) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername()) && users.get(i).getPassword().equals(userKezik.getPassword())) {
                return users.get(i);
            }
        }

        return null;
    }

    public UserKezik recoverPasswordValidator(List<UserKezik> users, UserKezik userKezik) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername()) && users.get(i).getPhrase().equals((userKezik.getPhrase()))) {
                users.get(i).setPassword((userKezik.getPassword()));
                return users.get(i);
            }
        }

        return null;
    }
}
