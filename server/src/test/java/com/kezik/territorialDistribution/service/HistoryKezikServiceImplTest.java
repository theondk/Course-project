package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.HistoryKezik;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class HistoryKezikServiceImplTest {

    @Autowired
    private HistoryKezikService service;

    @Test
    @Rollback
    public void testSaveEventInHistoryWhenTaskExists() {
        HistoryKezik historyKezik = new HistoryKezik();
        historyKezik.setName("smth");
        historyKezik = service.saveInHistory(historyKezik, 1, 3);
        Assert.assertTrue(historyKezik.getId() != 0);
    }

    @Test(expected = Exception.class)
    public void testSaveEventInHistoryWhenTaskNotExists() {
        HistoryKezik historyKezik = new HistoryKezik();
        historyKezik.setName("smth");
        service.saveInHistory(historyKezik, 1, 0);
    }

    @Test
    public void testGetHistoryForMapping() {
        List<HistoryKezik> history = service.getHistory();
        Assert.assertNotNull(history);
    }

    @Test
    @Rollback
    public void testClearRecordFromHistoryWhenHistoryExists() {
        service.deleteFromHistory(15);
        List<HistoryKezik> history = service.getHistory();
        Optional<HistoryKezik> first = history.stream().filter(h -> h.getId() == 15).findFirst();
        Assert.assertFalse(first.isPresent());
    }

    @Test(expected = EmptyResultDataAccessException.class)
    @Rollback
    public void testClearRecordFromHistoryWhenHistoryNotExists() {
        service.deleteFromHistory(0);
    }
}