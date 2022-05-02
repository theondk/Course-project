package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.UserKezik;
import com.kezik.territorialDistribution.repository.UserKezikRepository;
import org.apache.catalina.User;
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

        userKezik.setRole("Пользователь");
        userKezik.setStatus("Ожидание активации");
        userKezikRepository.save(userKezik);
        return true;
    }

    @Override
    public List<UserKezik> getAllUsers() {
        return userKezikRepository.findAll();
    }

    @Override
    public Object authUser(UserKezik userKezik) {
        List<UserKezik> users = userKezikRepository.findAll();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername()) && users.get(i).getPassword().equals(userKezik.getPassword())) {
                return users.get(i);
            }
        }

        return false;
    }

    @Override
    public String deleteUser(Integer id) {
        System.out.println(id);
        userKezikRepository.deleteById(id);
        return "user deleted";
    }

    @Override
    public String activateUser(Integer id, Integer officeId) {
        UserKezik userKezik = userKezikRepository.getById(id);
        userKezik.setOfficeId(officeId);
        userKezik.setStatus("Активен");
        userKezikRepository.save(userKezik);
        return "user activated";
    }

    @Override
    public boolean recoverPassword(UserKezik userKezik) {
        List<UserKezik> users = userKezikRepository.findAll();
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(userKezik.getUsername()) && users.get(i).getPhrase().equals((userKezik.getPhrase()))) {
                users.get(i).setPassword((userKezik.getPassword()));
                userKezikRepository.save(users.get(i));
                return true;
            }
        }

        return false;
    }

    @Override
    public String roleHandler(Integer id, String motion) {
        UserKezik userKezik = userKezikRepository.getById(id);
        if (motion.equals("dec")) {
            userKezik.setRole("Пользователь");
        } else {
            if (userKezik.getRole().equals("Пользователь")) {
                userKezik.setRole("Управляющий");
            } else {
                userKezik.setRole("Администратор");
                userKezik.setOfficeId(0);
            }
        }

        userKezikRepository.save(userKezik);
        return "role changed";
    }
}
