import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../service/data-handler.service';
import { Jobs } from '../model/jobs';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-comp',
  templateUrl: './update-comp.component.html',
  styleUrl: './update-comp.component.css'
})
export class UpdateCompComponent implements OnInit{
/*onUserInput(event: any) {
let inputText = event.target.value;
    if(inputText==''){
      this.isDisabled = true;  // Make button disabled
    }
    else{
      this.isDisabled = false; // Make button enabled
    }
  }*/

  validator(){
    if((this.job.jobTitle==='')||
    (this.job.description==='')||
    (this.job.jobType==='')||
    (this.job.location==='')||
    (this.job.openings===0))
    {
      alert("fill all fields")
    }
    else{
      this.onSubmit();
    }
  }

 



   id:number;
   jobs:Jobs[];
   job:Jobs=new Jobs();
   job2:Jobs=new Jobs();
  constructor(private datah:DataHandlerService,private route:ActivatedRoute,private router:Router){
    // private datah:DataHandlerService
   
  }
  

  ngOnInit()
  {
    // this.jobs=new Jobs(); 
     this.id= this.route.snapshot.params['id'];
     this.datah.findJob(this.id).subscribe(data=>{
      console.log(data);
      this.job2=data;
     this.job=this.job2;
     });
     //this.validator();
  }
 /*populateData(id:number){
    this.Mid=id;
    this.datah.findJob(id).subscribe(dataincoming=>{
      this.jobs=dataincoming;
    });
    

  }*/
onSubmit(){
  this.datah.updateJob(this.job,this.id).subscribe(data=>{
    console.log(data)
  });
 // this.job= new Jobs();
 alert("Data Updated for id: "+this.id)
 this.router.navigate(['jobs'])

}
}
