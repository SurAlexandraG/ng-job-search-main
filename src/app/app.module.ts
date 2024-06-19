import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { JobService } from './job.service';
import { FavoriteService } from './favorite.service';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FavoritesComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ JobService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
