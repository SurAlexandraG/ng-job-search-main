import { Component, OnInit } from '@angular/core';
import { JobService, Job } from '../job.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    });
  }

  toggleFavorite(job: Job): void {
    if( this.isFavorite(job)) {
      this.favoriteService.removeFavorite(job.id);
    } else {
      this.favoriteService.addFavorite(job.id);
    }
  }

  isFavorite(job: Job): boolean {
    return this.favoriteService.isFavorite(job.id);
  }
}
