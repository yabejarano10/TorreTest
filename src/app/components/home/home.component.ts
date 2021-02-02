import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs:Job[];
  

  constructor(private _jobService: JobsService,
              private router: Router) { }

  ngOnInit() {
    this._jobService.getJobs().subscribe(response => {
      this.jobs = response.results
    });
  }
  openDetail(job:Job){
    this.router.navigate([`/jobs/${job.id}`]);
  }
}
