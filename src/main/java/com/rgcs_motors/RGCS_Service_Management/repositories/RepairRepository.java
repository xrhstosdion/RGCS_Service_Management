package com.rgcs_motors.RGCS_Service_Management.repositories;

import com.rgcs_motors.RGCS_Service_Management.domain.Repair;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface RepairRepository extends CrudRepository<Repair, Long> {

    List<Repair> findByLicenseplate(String licenseplate);

    List<Repair> findTop10ByStatusOrderByRepairdateAsc(String status) throws Exception;

    List<Repair> findByRepairdateLessThanOrderByRepairdateAsc(String date) throws Exception;

    List<Repair> findByRepairdateBetweenOrderByRepairdateAsc(String date1, String date2) throws Exception;

    Repair save(Repair repair);

    void delete(Repair repair) throws IllegalArgumentException;

}
