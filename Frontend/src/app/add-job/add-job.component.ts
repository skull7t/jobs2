import { Component } from '@angular/core';
import { Jobs } from '../model/jobs';
import { DataHandlerService } from '../service/data-handler.service';
import { error } from 'console';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {
 job:Jobs=new Jobs();
 
 constructor(private datahandel:DataHandlerService){}
  onSubmit(){
    this.createjob();
  }
  createjob(){
    console.log(this.job)
     this.datahandel.createJob(this.job).subscribe(data=>{
    console.log(data)
  });
    alert("job created")
  }

  validator(){
    console.log("in validator")
    if((this.job.jobTitle==='')||
    (this.job.description==='')||
    (this.job.jobType==='')||
    (this.job.location==='')||
    (this.job.openings===0))
    {
      alert("fill all fields")
    }
    else{
      console.log("else bllock")
      this.onSubmit();
    }
  }




}
