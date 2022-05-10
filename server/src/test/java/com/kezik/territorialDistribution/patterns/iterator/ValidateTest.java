package com.kezik.territorialDistribution.patterns.iterator;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class ValidateTest {

    @Test
    public void testGetIterator() {
        String[] data = new String[] {"Dima", "Sasha"};
        Validate validate = new Validate(data);
        Iterator iterator = validate.getIterator();

        Assert.assertNotNull(iterator);
    }

    @Test
    public void testGetIteratorShouldHasNext() {
        String[] data = new String[] {"Dima", "Sasha"};
        Validate validate = new Validate(data);
        Iterator iterator = validate.getIterator();

        Assert.assertTrue(iterator.hasNext());
    }

    @Test
    public void testGetIteratorShouldNotHasNext() {
        String[] data = new String[] {};
        Validate validate = new Validate(data);
        Iterator iterator = validate.getIterator();

        Assert.assertFalse(iterator.hasNext());
    }
}