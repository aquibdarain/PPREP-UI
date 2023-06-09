import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { JobsService } from 'src/app/service/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private jobSer: JobsService, private router: Router) {
    this.getAllJobs()
  }

  ngOnInit(): void { }

  jobData: any = [];

  getAllJobs() {
    this.jobSer.getJobs().subscribe((success) => {
      console.log(success);
      this.jobData = success;
    }, (error) => {
      console.log(error);
    })
  }


  jobForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    contact: new FormControl(),
    email: new FormControl(),
    appliedPosition: new FormControl(),
    jobLocation: new FormControl(),
    resume: new FormControl(),
  });

  applyOnJobs() {
    let obj:any=[];
    obj = this.jobForm.value;
    this.jobSer.applyOnJob(obj).subscribe((success)=>{
      console.log(success);
    },(error)=>{
      console.log(error);
    })
  }
}
