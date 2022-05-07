package com.kezik.territorialDistribution.utils;

import com.kezik.territorialDistribution.model.CountryKezik;
import com.kezik.territorialDistribution.model.OfficeKezik;
import com.kezik.territorialDistribution.model.UserKezik;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class UserValidatorKezikTest {

private final UserValidatorKezik validator = new UserValidatorKezik();
private List<UserKezik> users = new ArrayList<>() {
    {
        add(new UserKezik("Sasha", "aa","fdsdf", "phrase_1", "sdfsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus"))));
        add(new UserKezik("a", "a","a", "a", "a", new OfficeKezik("a", new CountryKezik("a"))));
        add(new UserKezik("b", "b","a", "a", "a", new OfficeKezik("a", new CountryKezik("a"))));
    }
};

    @Test
    public void testValidateUsernameShouldReturnFalseWhenDataExistsInList() {
        boolean result = validator.validateUsername(users, new UserKezik("Sasha", "aa","fdsdf", "phrase_1", "sdfsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus"))));
        Assert.assertFalse(result);
    }

    @Test
    public void validateUserDataShouldReturnNotNullWhenDataExistsInList()  {
        UserKezik result = validator.validateUserData(users, new UserKezik("a", "a","a", "a", "a", new OfficeKezik("a", new CountryKezik("a"))));
        Assert.assertNotNull(result);
    }
}