import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AppComponent } from './app.component';
import { UpdateCompComponent } from './update-comp/update-comp.component';

const routes: Routes = [
  {path:'addjobs',component:AddJobComponent},
  {path:'jobs',component:AllJobsComponent},
  {path:'update/:id',component:UpdateCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
