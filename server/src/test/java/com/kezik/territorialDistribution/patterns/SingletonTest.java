package com.kezik.territorialDistribution.patterns;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class SingletonTest {

    private static String PATH_TO_LOG_FILE = "logs.txt";

    @Test
    public void testGetInstanceShouldReturnEqualInstances() {
        Singleton singletonFirst = Singleton.getInstance();
        Singleton singletonSecond = Singleton.getInstance();

        Assert.assertEquals(singletonFirst, singletonSecond);
    }


    @Test
    public void testSaveLogShouldPassWhenCorrectPath() {
        Singleton singletonFirst = Singleton.getInstance();
        singletonFirst.saveLog("Log", PATH_TO_LOG_FILE);
    }

    @Test(expected = Exception.class)
    public void testSaveLogShouldPassWhenIncorrectPath() {
        Singleton singletonFirst = Singleton.getInstance();
        singletonFirst.saveLog("Log", null);
    }
}