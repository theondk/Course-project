package com.kezik.territorialDistribution.controller;

import com.kezik.territorialDistribution.model.UserKezik;
import com.kezik.territorialDistribution.service.UserKezikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserKezikController {

    @Autowired
    private UserKezikService userKezikService;

    @PostMapping("/add")
    public boolean saveUser(@RequestBody UserKezik userKezik) {
        return userKezikService.saveUser(userKezik);
    }

    @PutMapping("/recover")
    public boolean recoverPassword(@RequestBody UserKezik userKezik) {
        return userKezikService.recoverPassword(userKezik);
    }

    @GetMapping("/getAll")
    public List<UserKezik> getAllUsers() {
        return userKezikService.getAllUsers();
    }

    @PostMapping("/authUser")
    public Object authUser(@RequestBody UserKezik userKezik) {
        return userKezikService.authUser(userKezik);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Integer id) {
        return userKezikService.deleteUser(id);
    }

    @PutMapping("/role/handler/{id}/{motion}")
    public String roleHandler(@PathVariable Integer id, @PathVariable String motion) {
        return userKezikService.roleHandler(id, motion);
    }

    @PutMapping("/activate/{id}/{officeId}")
    public String activateUser(@PathVariable Integer id, @PathVariable Integer officeId) {
        return userKezikService.activateUser(id, officeId);
    }
}
