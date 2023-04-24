import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl(''),
  });

  onLogin() {
    this.loginForm.value;
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (success:any) => {
        localStorage.setItem('token',success.token);
        console.log(success);
        if (success) {
          this.router.navigate(['']);
          alert('Login Successfully');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
