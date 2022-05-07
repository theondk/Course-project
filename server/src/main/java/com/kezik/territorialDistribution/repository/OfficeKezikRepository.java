package com.kezik.territorialDistribution.repository;

import com.kezik.territorialDistribution.model.OfficeKezik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeKezikRepository extends JpaRepository<OfficeKezik,Integer> { }
