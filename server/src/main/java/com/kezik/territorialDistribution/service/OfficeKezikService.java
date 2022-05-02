package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.OfficeKezik;

import java.util.List;
import java.util.Optional;

public interface OfficeKezikService {
    public OfficeKezik saveOffice(OfficeKezik officeKezik);
    public List<OfficeKezik> getAllOffices(Integer offset, Integer limit);
    public int getOfficesCount();
    public Optional<OfficeKezik> getOfficeById(Integer id);
    public void deleteOffice(int id);
    public OfficeKezik editOffice(int id, OfficeKezik officeKezik);
    public List<OfficeKezik> getAllOfficesByFilter();
}
