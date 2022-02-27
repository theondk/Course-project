package com.kezik.territorialDistribution.repository;

import com.kezik.territorialDistribution.model.TerritoryKezik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TerritoryKezikRepository extends JpaRepository<TerritoryKezik,Integer> {}
