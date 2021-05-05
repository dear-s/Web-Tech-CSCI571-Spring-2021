import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
  
export class TvDetailsComponent implements OnInit {

  final_id;
  id: Number;
  json_data_list;
  json_recTv;
  get_array;
  array2d = [];
  get_array2;
  array2d2 = [];
  global_id;

  mobile_screen_size; // boolean
  desktop_screen_size; // boolean

  // grab from localStorage
  public added: boolean = false;
  public buttonName: any = 'Add to Watchlist';
  public alert_text: any = "";
  public isVisible: boolean = false;

  // add to watchList - information is already in the localStorage
  // "watchlist" - will store only id's - sequence
  fetch_list_string = localStorage.watchlist;
  fetch_list_json = JSON.parse(this.fetch_list_string)
  watch_list = this.fetch_list_json.list;

  toggle() {
    this.added = !this.added;

    //change the name of the button
    if (this.watch_list.includes(this.global_id) == false) {
      this.buttonName = "Remove from Watchlist";
      this.alert_text = "Added to watchlist.";

      this.watch_list.push(this.global_id)
    }
    else {
      this.buttonName = "Add to Watchlist";
      this.alert_text = "Removed from watchlist.";

      var index = this.watch_list.indexOf(this.global_id);
      if (index > -1) {
        this.watch_list.splice(index, 1);
      }
    }

    this.fetch_list_json.list = this.watch_list
    var fetch_back_string = JSON.stringify(this.fetch_list_json)
    localStorage.setItem("watchlist", fetch_back_string)

    // make the alert box visible for 5 seconds or manually close
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 5000);
  }

  closeIt() {
    this.isVisible = false;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number         
      this.global_id = +params['id'];

      if(this.watch_list.includes(this.global_id) == true) {
        this.buttonName = "Remove from Watchlist"
      }
      else {
        this.buttonName = "Add to Watchlist"
      }

      this.http.get(`https://sanya-usc-films.wl.r.appspot.com/detailsPage2/${this.id}`)
        .subscribe((data) => {
          console.log("data from movie detailsPage2.js: ", data);
          this.displayData(data);
        })
      
      this.http.get(`https://sanya-usc-films.wl.r.appspot.com/recTv/${this.id}`)
        .subscribe((data) => {
          console.log("data from movie recTv.js: ", data);
          this.json_recTv = data;

          // recommended tv shows carousel
          this.get_array = this.json_recTv.recTv;
          var count = 0
          var new_array = []
          this.array2d = [];

          
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
          // console.log("array2d: ", this.array2d);





          // similar tv carousel
          this.get_array2 = this.json_recTv.simTv;
          var count = 0
          var new_array2 = []
          this.array2d2 = []
          
          // for desktop screens
          if (screen.width > 600) {
            for (let arr of this.get_array2) {
              if (count == 6) {
                this.array2d2.push(new_array2)
                new_array2 = [arr]
                count = 1
              }
              else {
                new_array2.push(arr)
                count += 1
              }
            }

            if (new_array2.length > 0) {
              this.array2d2.push(new_array2)
            }
          }

          // for mobile screens
          else {
            for (let arr of this.get_array2) {
              if (count == 1) {
                this.array2d2.push(new_array2)
                new_array2 = [arr]
                count = 1
              }
              else {
                new_array2.push(arr)
                count += 1
              }
            }

            if (new_array2.length > 0) {
              this.array2d2.push(new_array2)
            }
          }
          // console.log("array2d2: ", this.array2d2);
        })
      
      
    });

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

  displayData(data) {
    this.json_data_list = data;
  }


  onSelect(img) {
    this.router.navigate(['/watch/tv', img.id]);

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
    var extract_title = img.name;
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
    sss_json[extract_id] = "tv"
    var sss_json_string = JSON.stringify(sss_json)
    localStorage.setItem("media_type", sss_json_string)
    
  }

  noIndicators() {
    return {
      no_indicators: this.mobile_screen_size
    }
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


}
