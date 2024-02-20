import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateCompComponent } from './update-comp/update-comp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    AllJobsComponent,
    NavbarComponent,
    UpdateCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HttpClient,
      useFactory: provideHttpClient,
      // Add the withFetch() option
      withFetch: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
