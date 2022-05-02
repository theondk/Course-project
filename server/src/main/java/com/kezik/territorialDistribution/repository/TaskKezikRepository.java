package com.kezik.territorialDistribution.repository;

import com.kezik.territorialDistribution.model.TaskKezik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskKezikRepository extends JpaRepository<TaskKezik,Integer> {
    List<TaskKezik> findAllByUserId(int id);
}
