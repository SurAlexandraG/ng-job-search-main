import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteJobsKey = 'favoriteJobs';

  getFavorites(): number[] {
    const favorites = localStorage.getItem(this.favoriteJobsKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(jobId: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(jobId)) {
      favorites.push(jobId);
      localStorage.setItem(this.favoriteJobsKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(jobId: number): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(jobId);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem(this.favoriteJobsKey, JSON.stringify(favorites));
    }
  }

  isFavorite(jobId: number): boolean {
    return this.getFavorites().includes(jobId);
  }
}
