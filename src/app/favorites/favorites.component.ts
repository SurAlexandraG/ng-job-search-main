import { Component, OnInit } from '@angular/core';
import { JobService, Job } from '../job.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.loadFavoriteJobs();
  }

  loadFavoriteJobs(): void {
    const favoriteIds = this.favoriteService.getFavorites();
    this.jobService.getJobs().subscribe((jobs: Job[]) => {
      this.favoriteJobs = jobs.filter(job => favoriteIds.includes(job.id));
    });
  }

  removeFavorite(job: Job): void {
    this.favoriteService.removeFavorite(job.id);
    this.loadFavoriteJobs();
  }
}
