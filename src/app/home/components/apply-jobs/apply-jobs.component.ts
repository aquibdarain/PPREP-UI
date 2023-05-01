import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/service/jobs.service';


@Component({
  selector: 'app-apply-jobs',
  templateUrl: './apply-jobs.component.html',
  styleUrls: ['./apply-jobs.component.scss']
})
export class ApplyJobsComponent implements OnInit {

  constructor(private jobSer: JobsService, private router: Router) { }

  ngOnInit(): void {
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


  jobApply() {
    let obj:any=[];
    obj = this.jobForm.value;
    this.jobSer.applyOnJob(obj).subscribe((success)=>{
      console.log(success);
    },(error)=>{
      console.log(error);
    })
  }
}
