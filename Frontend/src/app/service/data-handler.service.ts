import { Injectable } from '@angular/core';
import { Jobs } from '../model/jobs';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private httpc:HttpClient) {

   }
   private  baseurl="http://localhost:8080/jobs";

   getJob():Observable<Jobs[]>{
      return this.httpc.get<Jobs[]>(`${this.baseurl}`);
   }

   findJob(id:number):Observable<Jobs>{
      return this.httpc.get<Jobs>(`${this.baseurl}/${id}`)
   }

   createJob(job:Jobs):Observable<Object>{
      return this.httpc.post(`${this.baseurl}`,job);
   }

   updateJob(job:Jobs,id:number):Observable<Object>{
      return this.httpc.put(`${this.baseurl}/${id}`,job);
   }
   
   deleteJob(id:number):Observable<Jobs[]>{
      return this.httpc.delete<Jobs[]>(`${this.baseurl}/${id}`);
   }
}
