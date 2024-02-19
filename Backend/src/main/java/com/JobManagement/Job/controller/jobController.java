package com.JobManagement.Job.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.JobManagement.Job.model.jobModel;
import com.JobManagement.Job.service.jobService;


@CrossOrigin(origins = "http://localhost:4200/") 
@RestController
public class jobController {

	@Autowired
	public jobService serv;
	
	 @PostMapping("/jobs")
	public String Create(@RequestBody jobModel jb) {
		return serv.create(jb);
	}
	
	 @GetMapping("/jobs")
	public List<jobModel>Read(){
		return serv.read();
	}
	
	 @PutMapping("/jobs/{id}")
	public String Update(@PathVariable Long id, @RequestBody jobModel jb) {
	
	return serv.update(id,jb);
	}
	
	 @DeleteMapping("/jobs/{id}")
	public String Delete(@PathVariable Long id) {
		return serv.delete(id);
	}
	 
	
	 @GetMapping("/jobs/{id}")
	 public Optional<jobModel> findById(@PathVariable Long id){
		 return serv.findById(id);
	 }
	
}
