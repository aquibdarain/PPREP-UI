import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  constructor(private userSer: UserService, private router: Router) {
    this.getAllUser()
  }

  ngOnInit(): void {}

userArr: any = [];

getAllUser(){
  this.userSer.getUser().subscribe((success)=>{
    console.log(success);
    this.userArr =success;
  },(error)=>{
    console.log(error);
  })
}

}
