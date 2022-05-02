package com.kezik.territorialDistribution.service;

import com.kezik.territorialDistribution.model.OfficeKezik;
import com.kezik.territorialDistribution.repository.OfficeKezikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OfficeKezikServiceImpl implements OfficeKezikService {

    @Autowired
    private OfficeKezikRepository officeKezikRepository;

    @Override
    public OfficeKezik saveOffice(OfficeKezik officeKezik) {
        return officeKezikRepository.save(officeKezik);
    }

    @Override
    public List<OfficeKezik> getAllOffices(Integer offset, Integer limit) {
        List<OfficeKezik> result = new ArrayList<>();
        Page<OfficeKezik> page = officeKezikRepository.findAll(PageRequest.of(offset, limit));
        result.addAll(page.getContent());
        return result;
    }


    @Override
    public List<OfficeKezik> getAllOfficesByFilter() {
        return officeKezikRepository.findAll();
    }

    @Override
    public int getOfficesCount() {
        return (int) officeKezikRepository.count();
    }

    @Override
    public Optional<OfficeKezik> getOfficeById(Integer id) {
        return officeKezikRepository.findById(id);
    }

    @Override
    public void deleteOffice(int id) {
        officeKezikRepository.deleteById(id);
    }

    @Override
    public OfficeKezik editOffice(int id, OfficeKezik officeKezik) {
        officeKezik.setId(id);
        officeKezik.setCity(officeKezik.getCity());
        return officeKezikRepository.save(officeKezik);
    }
}
