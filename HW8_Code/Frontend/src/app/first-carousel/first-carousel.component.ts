import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-first-carousel',
  templateUrl: './first-carousel.component.html',
  styleUrls: ['./first-carousel.component.css']
})
  
export class FirstCarouselComponent implements OnInit {

  // call proxy server
  json_data_list;

  mobile_screen_size; // boolean
  desktop_screen_size; // boolean

  constructor(private http: HttpClient,
    public breakpointObserver: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit(): void {
    this.http.get("https://sanya-usc-films.wl.r.appspot.com/home_page")
      .subscribe((data) => {
        console.log("data from first: ", data);
        this.displayData(data);
      })
    
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // i phone viewport
          this.mobile_screen_size = true;
          this.desktop_screen_size = false;
        }
        else {
          // larger screens
          this.mobile_screen_size = false;
          this.desktop_screen_size = true;
        }
      });
  }

  displayData(data) {
    this.json_data_list = data;
  }

  // ngClasses for the frontend
  setHover() {
    return {
      hovered_prop: this.mobile_screen_size,
      nonhovered: this.desktop_screen_size
    }
  }

  noIndicators() {
    return {
      no_indicators: this.mobile_screen_size,
      something: this.mobile_screen_size
    }
  }

  setText() {
    return {
      text_desk: this.desktop_screen_size,
      text_mob: this.mobile_screen_size
    }
  }


  // carousel code
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  onSelect(img) {
    this.router.navigate(['/watch/movie', img.id]);

    // store in localStorage from here - both empty

    var fetch_string = localStorage.getItem("cont_watching")
    var fetch_string_json = JSON.parse(fetch_string);

    var id_to_add = img.id;
    if (fetch_string_json.id_array.includes(id_to_add)) {
      // get the index value - remove - append
      var index = fetch_string_json.id_array.indexOf(id_to_add);
      if (index > -1) {
        fetch_string_json.id_array.splice(index, 1);
      }
    }
    fetch_string_json.id_array.push(id_to_add)

    var new_json_to_set = JSON.stringify(fetch_string_json)
    localStorage.setItem("cont_watching", new_json_to_set)
    
    // let's add to cont_watching_objects
    // string, convert into json, manipulate, convert to string
    var fetch_string2 = localStorage.getItem("cont_watching_objects")
    var fetch_string_json2 = JSON.parse(fetch_string2);

    var extract_id = img.id;
    var extract_title = img.title;
    var extract_poster_path = img.poster_path;
    
    // get_array_with_objects
    fetch_string_json2[extract_id] = {
      "lookup_id": extract_id,
      "lookup_title": extract_title,
      "lookup_poster_path": extract_poster_path
    }

    var new_json_to_set2 = JSON.stringify(fetch_string_json2)
    localStorage.setItem("cont_watching_objects", new_json_to_set2)


    // setting the value of media_type in localStorage - for every click
    var sss = localStorage.getItem("media_type")
    var sss_json = JSON.parse(sss);
    sss_json[extract_id] = "movie"
    var sss_json_string = JSON.stringify(sss_json)
    localStorage.setItem("media_type", sss_json_string)
    
  }

}
