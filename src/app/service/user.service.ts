import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  signUp(data: any) {
    let url = "http://localhost:2023/user/signup"
    return this.http.post(url,data)
  }

  login(data:any){
    let url = "http://localhost:2023/user/login"
    return this.http.post(url,data)
  }

  checkToken(){
    return this.http.get("http://localhost:2023/user/checkToken");
  }

}
