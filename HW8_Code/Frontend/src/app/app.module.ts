import { FirstCarouselComponent } from './first-carousel/first-carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LayoutModule } from '@angular/cdk/layout';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

import { ThirdCarouselComponent } from './third-carousel/third-carousel.component';
import { FourthCarouselComponent } from './fourth-carousel/fourth-carousel.component';
import { FifthCarouselComponent } from './fifth-carousel/fifth-carousel.component';
import { SixthCarouselComponent } from './sixth-carousel/sixth-carousel.component';
import { SeventhCarouselComponent } from './seventh-carousel/seventh-carousel.component';
import { EighthCarouselComponent } from './eighth-carousel/eighth-carousel.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { SecondCarouselComponent } from './second-carousel/second-carousel.component';
import { TvCastComponent } from './tv-cast/tv-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchListComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    FirstCarouselComponent,
    ThirdCarouselComponent,
    FourthCarouselComponent,
    FifthCarouselComponent,
    SixthCarouselComponent,
    SeventhCarouselComponent,
    EighthCarouselComponent,
    MovieCastComponent,
    SecondCarouselComponent,
    TvCastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    LayoutModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent, FirstCarouselComponent]
})
export class AppModule { }
