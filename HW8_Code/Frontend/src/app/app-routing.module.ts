import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mylist',
    component: WatchListComponent
  },
  {
    path: 'watch/movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'watch/tv/:id',
    component: TvDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
  WatchListComponent,
  MovieDetailsComponent,
  TvDetailsComponent
]
