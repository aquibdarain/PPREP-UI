import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private http: HttpClient) {}

  getJobs() {
    let url = 'http://localhost:2023/jobPost/get';
    return this.http.get(url);
  }

  applyOnJob(obj:any){
    let url ='http://localhost:2023/applyJob/add';
    return this.http.post(url,obj)
  }

}
