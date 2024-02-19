import { Component, OnInit } from '@angular/core';
import { Jobs } from '../model/jobs';
import { DataHandlerService } from '../service/data-handler.service';
import { Router } from '@angular/router';
import { UpdateCompComponent } from '../update-comp/update-comp.component';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent implements OnInit {
  jobs:Jobs[];
constructor(private data:DataHandlerService,private router:Router){
  // ,private router:Router,private upd :UpdateCompComponent
}
ngOnInit() {
 this.getEmp();
}
private getEmp(){
  this.data.getJob().subscribe(dataincoming=>{
    this.jobs=dataincoming;
    console.log("working")
  });
}
updateJob(id:number){
  this.router.navigate(['update',id])
  console.log("update")
  // this.upd.populateData(id);
}
delete(id:number){
  this.data.deleteJob(id).subscribe(datainc=>{
    console.log("deleted")
  });
  alert("job deleted of :"+id)
  this.data.getJob().subscribe(dataincoming=>{
    this.jobs=dataincoming;
    console.log("working2")
  });
}
}
