package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.UserKezik;
import com.kezik.territorialDistribution.patterns.Singleton;
import com.kezik.territorialDistribution.repository.OfficeKezikRepository;
import com.kezik.territorialDistribution.repository.UserKezikRepository;
import com.kezik.territorialDistribution.utils.UserValidatorKezik;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserKezikServiceImpl implements UserKezikService {

    @Autowired
    private UserKezikRepository userKezikRepository;
    @Autowired
    private OfficeKezikRepository officeKezikRepository;

    @Override
    public boolean saveUser(UserKezik userKezik) {
        UserValidatorKezik validatorKezik = new UserValidatorKezik();
        List<UserKezik> users = userKezikRepository.findAll();
        if (!validatorKezik.validateUsername(users, userKezik)) {
            return false;
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
        UserValidatorKezik validatorKezik = new UserValidatorKezik();
        List<UserKezik> users = userKezikRepository.findAll();

        UserKezik res = validatorKezik.validateUserData(users, userKezik);
        if (res != null) {
            Singleton.getInstance().saveLog("Пользователь " + res.getUsername() + " вошёл в систему");
            return res;
        }

        return false;
    }

    @Override
    public String deleteUser(Integer id) {
        userKezikRepository.deleteById(id);
        return "user deleted";
    }

    @Override
    public String activateUser(Integer id, Integer officeId) {
        UserKezik userKezik = userKezikRepository.getById(id);
        userKezik.setOffice(officeKezikRepository.getById(officeId));
        userKezik.setStatus("Активен");
        userKezikRepository.save(userKezik);
        return "user activated";
    }

    @Override
    public boolean recoverPassword(UserKezik userKezik) {
        UserValidatorKezik validatorKezik = new UserValidatorKezik();
        List<UserKezik> users = userKezikRepository.findAll();
        if (validatorKezik.recoverPasswordValidator(users, userKezik) != null) {
            userKezikRepository.save(validatorKezik.recoverPasswordValidator(users, userKezik));
            return true;
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
//                userKezik.setOfficeId(0);
            }
        }

        userKezikRepository.save(userKezik);
        return "role changed";
    }
}
