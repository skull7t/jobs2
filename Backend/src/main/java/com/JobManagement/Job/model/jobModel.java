package com.JobManagement.Job.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class jobModel {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long jobId;
private String jobTitle;
private String jobType;
private String location;
private String description;
private int openings;
private byte experience;
public jobModel() {
	
	
}

public jobModel(Long jobId, String jobTitle, String jobType, String location, String description, int openings,
		byte experience) {
	super();
	this.jobId = jobId;
	this.jobTitle = jobTitle;
	this.jobType = jobType;
	this.location = location;
	this.description = description;
	this.openings = openings;
	this.experience = experience;
	
}

public Long getJobId() {
	return jobId;
}
public void setJobId(Long jobId) {
	this.jobId = jobId;
}
public String getJobTitle() {
	return jobTitle;
}
public void setJobTitle(String jobTitle) {
	this.jobTitle = jobTitle;
}
public String getJobType() {
	return jobType;
}
public void setJobType(String jobType) {
	this.jobType = jobType;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public int getOpenings() {
	return openings;
}
public void setOpenings(int openings) {
	this.openings = openings;
}
public byte getExperience() {
	return experience;
}
public void setExperience(byte experience) {
	this.experience = experience;
}


}
