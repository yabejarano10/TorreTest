import { Injectable } from '@angular/core';
import { JobsResponseModel } from '../models/JobsResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobDetailModel } from '../models/JobDetailModel';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor( private http: HttpClient) {}

  getJobs(): Observable<JobsResponseModel>{
    return this.http.post<JobsResponseModel>("https://search.torre.co/opportunities/_search/?offset=0&size=100&aggregate=false",{});
  }

  getDetailJob(id:string):Observable<JobDetailModel>{
    return this.http.get<JobDetailModel>(`https://torre.co/api/opportunities/${id}`)
  }
}
