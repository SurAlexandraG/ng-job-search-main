import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }, // Redirect to jobs tab by default
  { path: '**', redirectTo: '/jobs' } // Redirect to jobs tab for any unknown route as a fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
