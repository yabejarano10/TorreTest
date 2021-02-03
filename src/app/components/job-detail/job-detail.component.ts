import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetailModel } from 'src/app/models/JobDetailModel';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  detail:JobDetailModel;
  isLoaded = false;

  remote = "";
  anywhere = "";
  constructor(private route: ActivatedRoute,
              private _jobService:JobsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this._jobService.getDetailJob(id).subscribe(response => {
      this.detail = response
      this.isLoaded = true;
      this.remote = this.detail.place.remote? "Yes" : "No";
      this.anywhere = this.detail.place.anywhere? "Yes" : "No";
    });

  }

}
