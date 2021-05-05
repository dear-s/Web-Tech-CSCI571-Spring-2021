import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-fourth-carousel',
  templateUrl: './fourth-carousel.component.html',
  styleUrls: ['./fourth-carousel.component.css']
})
export class FourthCarouselComponent implements OnInit {

  // call proxy server - code
  json_data_list;
  get_array;
  array2d = [];

  mobile_screen_size; // boolean
  desktop_screen_size; // boolean

  constructor(private http: HttpClient,
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.http.get("https://sanya-usc-films.wl.r.appspot.com/topMovies")
      .subscribe((data) => {
        console.log("data from fourth: ", data);
        this.displayData(data);
      })
    
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // i phone viewport
          // console.log("small view port");
          this.mobile_screen_size = true;
          this.desktop_screen_size = false;
        }
        else {
          // larger screens
          // console.log("does not match")
          this.mobile_screen_size = false;
          this.desktop_screen_size = true;
        }
      });
    
  }

  setMargins() {
    return {
      desktop_class: this.desktop_screen_size,
      mobile_class: this.mobile_screen_size
    }
  }

  setWidth() {
    return {
      desk_width: this.desktop_screen_size,
      mob_width: this.mobile_screen_size
    }
  }

  setHover() {
    return {
      hovered_prop: this.mobile_screen_size,
      nonhovered: this.desktop_screen_size
    }
  }

  noIndicators() {
    return {
      no_indicators: this.mobile_screen_size
    }
  }
  

  displayData(data) {
    this.json_data_list = data;
    this.get_array = this.json_data_list.top_rated_movies_section;

    // divide into 6 cards per slide
    // console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
    var count = 0
    var new_array = []

    
    // for desktop screens
    if (screen.width > 600) {
      for (let arr of this.get_array) {
        if (count == 6) {
          this.array2d.push(new_array)
          new_array = [arr]
          count = 1
        }
        else {
          new_array.push(arr)
          count += 1
        }
      }

      if (new_array.length > 0) {
        this.array2d.push(new_array)
      }
    }

    // for mobile screens
    else {
      for (let arr of this.get_array) {
        if (count == 1) {
          this.array2d.push(new_array)
          new_array = [arr]
          count = 1
        }
        else {
          new_array.push(arr)
          count += 1
        }
      }

      if (new_array.length > 0) {
        this.array2d.push(new_array)
      }
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
