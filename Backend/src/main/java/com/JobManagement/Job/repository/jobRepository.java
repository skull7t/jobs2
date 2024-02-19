package com.JobManagement.Job.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JobManagement.Job.model.jobModel;

public interface jobRepository extends JpaRepository<jobModel,Long> {

}
