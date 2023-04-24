import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signupForm = new FormGroup({
    name: new FormControl(''),
    contactNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSignUp() {
    this.signupForm.value;
    console.log(this.signupForm.value);
    this.userService.signUp(this.signupForm.value).subscribe(
      (success) => {
        console.log(success);
        if (success) {
          alert('Register Successfully');
          // this.router.navigate(['../login']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
