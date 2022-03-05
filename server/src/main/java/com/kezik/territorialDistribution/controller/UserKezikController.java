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

    @GetMapping("/getAll")
    public List<UserKezik> getAllUsers() {
        return userKezikService.getAllUsers();
    }

    @PostMapping("/authUser")
    public boolean authUser(@RequestBody UserKezik userKezik) {
        return userKezikService.authUser(userKezik);
    }
}
