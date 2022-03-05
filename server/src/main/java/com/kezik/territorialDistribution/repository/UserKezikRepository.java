package com.kezik.territorialDistribution.repository;

import com.kezik.territorialDistribution.model.UserKezik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserKezikRepository extends JpaRepository<UserKezik,Integer> {}
