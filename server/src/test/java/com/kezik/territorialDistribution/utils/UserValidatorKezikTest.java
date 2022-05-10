package com.kezik.territorialDistribution.utils;

import com.kezik.territorialDistribution.model.CountryKezik;
import com.kezik.territorialDistribution.model.OfficeKezik;
import com.kezik.territorialDistribution.model.UserKezik;
import org.apache.catalina.User;
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
    public void validateRecoverPasswordShouldReturnNotNullWhenDataExistsInList()  {
        UserKezik result = validator.validateUserData(users, new UserKezik("a", "a","a", "a", "a", new OfficeKezik("a", new CountryKezik("a"))));
        Assert.assertNotNull(result);
    }

    @Test
    public void validateUserDataShouldReturnNotNullWhenDataExistsInList()  {
        UserKezik result = validator.validateUserData(users, new UserKezik("Sasha", "aa","fdsdf", "phrase_1", "sdfsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus"))));
        Assert.assertNotNull(result);
    }

    @Test
    public void validateUserDataShouldReturnNullWhenDataNotExistsInList()  {
        UserKezik result = validator.validateUserData(users, new UserKezik("asdasdSasha", "aa","fdsdf", "phrase_1", "sdfsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus"))));
        Assert.assertNull(result);
    }

    @Test
    public void validateUserDataShouldReturnTheSameUserFromList()  {
        UserKezik user = new UserKezik("Sasha", "aa","fdsdf", "phrase_1", "sdfsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus")));
        List<UserKezik> all = new ArrayList<>();
        all.add(user);
        UserKezik result = validator.validateUserData(all, user);
        Assert.assertEquals(result, user);
    }

    @Test
    public void validateUserDataShouldReturnNullWhenUserNotInList()  {
        UserKezik user = new UserKezik("Sa", "a","fdsf", "phras_1", "sdsdf", new OfficeKezik("Minsk", new CountryKezik("Belarus")));
        UserKezik result = validator.validateUserData(users, user);
        Assert.assertNull(result);
    }

    @Test
    public void validateRecoverPasswordShouldReturnNullWhenDataNotExistsInList()  {
        UserKezik result = validator.validateUserData(users, new UserKezik("a345", "a324","a", "a123", "a", new OfficeKezik("a", new CountryKezik("a"))));
        Assert.assertNull(result);
    }


}