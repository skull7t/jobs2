package com.JobManagement.Job.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JobManagement.Job.model.jobModel;
import com.JobManagement.Job.repository.jobRepository;

@Service
public class jobService {

	@Autowired
	public jobRepository repo;
	
	public List<jobModel> read() {
		List<jobModel> jobs = new ArrayList<>();
		repo.findAll().forEach(jobs::add);
		return jobs;

	}

	public String create(jobModel jb) {
		repo.save(jb);
		return "Data Saved";
	}

	public  String update(Long id, jobModel jb) {
		jb.setJobId(id);
		repo.save(jb);
		return "data for "+id+"updated";
	}

	public  String delete(Long id) {
		repo.deleteById(id);
		return "deleted record by "+id;
	}
	
	public Optional<jobModel> findById(Long id) {
        return repo.findById(id);
    }
	
}
