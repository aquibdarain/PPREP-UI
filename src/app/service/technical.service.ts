import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http: HttpClient) { }

  signUp(data: any) {
    let url = "http://localhost:2023/user/signup"
    return this.http.post(url,data)
  }
}
