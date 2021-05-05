
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-second-carousel',
  templateUrl: './second-carousel.component.html',
  styleUrls: ['./second-carousel.component.css']
})
export class SecondCarouselComponent implements OnInit {

  json_data_list;
  get_array = [];
  array2d = [];

  mobile_screen_size; // boolean
  desktop_screen_size; // boolean

  constructor(private http: HttpClient,
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.displayData();

    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile_screen_size = true;
          this.desktop_screen_size = false;
        }
        else {
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
  

  displayData() {
    var count = 0
    var new_array = []

    // poster_path, id, title
    // string, convert json, manipulate, convert string
    var f1 = JSON.parse(localStorage.cont_watching)
    var f2 = JSON.parse(localStorage.cont_watching_objects)
    var lookup_order_array = f1.id_array;

    // reverse the array
    lookup_order_array.reverse();

    // if length > 24 -- drop the rest -- only for frontend
    while (lookup_order_array.length > 24) {
      lookup_order_array.pop()
    }
    
    console.log("lookup order: ", lookup_order_array);

    // form get_array--- has objects in it
    for (var ind = 0; ind < lookup_order_array.length; ind++) {
      this.get_array.push(f2[lookup_order_array[ind]])
    }

    console.log("this.get_array: (for second) : ", this.get_array)

    
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

    console.log("array2d: ", this.array2d)
  }

  onSelect(img) {
    // check where to redirect [from localStorage] - could be tv or movie
    var media_json_string = localStorage.getItem("media_type")
    var media_json = JSON.parse(media_json_string)
    var get_media_type = media_json[img.lookup_id.toString()]

    if (get_media_type == "movie") {
      this.router.navigate(['/watch/movie', img.lookup_id]);
    }
    else {
      this.router.navigate(['/watch/tv', img.lookup_id]);
    }
    
    // store in localStorage from here - both empty

    var fetch_string = localStorage.getItem("cont_watching")
    var fetch_string_json = JSON.parse(fetch_string);

    var id_to_add = img.lookup_id;
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
  }

}