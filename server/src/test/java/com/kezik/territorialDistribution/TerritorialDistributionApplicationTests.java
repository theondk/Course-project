package com.kezik.territorialDistribution;

import com.kezik.territorialDistribution.controller.CountryKezikController;
import com.kezik.territorialDistribution.controller.HistoryKezikController;
import com.kezik.territorialDistribution.controller.OfficeKezikController;
import com.kezik.territorialDistribution.controller.TaskKezikController;
import com.kezik.territorialDistribution.model.TaskKezik;
import com.kezik.territorialDistribution.model.UserKezik;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class TerritorialDistributionApplicationTests {

	@Autowired
	private CountryKezikController countryKezikController;

	@Autowired
	private HistoryKezikController historyKezikController;

	@Autowired
	private OfficeKezikController officeKezikController;

	@Autowired
	private TaskKezikController taskKezikController;

	@Test
	void testContextLoadsShouldLoadCountryKezikController() {
		assertThat(countryKezikController).isNotNull();
	}

	@Test
	void testContextLoadsShouldLoadHistoryKezikController() {
		assertThat(historyKezikController).isNotNull();
	}

	@Test
	void testContextLoadsShouldLoadOfficeKezikController() {
		assertThat(officeKezikController).isNotNull();
	}

	@Test
	void testContextLoadsShouldLoadTaskKezikController() {
		assertThat(taskKezikController).isNotNull();
	}

}
