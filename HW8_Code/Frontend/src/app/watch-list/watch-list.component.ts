import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {


  mobile_screen_size; // boolean
  desktop_screen_size; // boolean


  watch_list_array;

  // "watchlist" - will store only id's - sequence
  fetch_list_string = localStorage.watchlist;
  fetch_list_json = JSON.parse(this.fetch_list_string)
  watch_list = this.fetch_list_json.list;

  fetch_list_string2 = localStorage.cont_watching;
  fetch_list_json2 = JSON.parse(this.fetch_list_string2)
  id_array_order = this.fetch_list_json2.id_array;

  id_values_for_lookup = JSON.parse(localStorage.cont_watching_objects)
  
  fetch_list_string3 = localStorage.media_type;
  id_mediaType = JSON.parse(this.fetch_list_string3);

  rev_order_array = this.id_array_order.reverse(); // use this - reversed order

  new_watch_list_order_for_frontend = [];

  // for adjusting mylist route - delete this
  // temporary_list = [{ id: 71383, media_type: "tv", title: "The Crossing", poster_path: "https://image.tmdb.org/t/p/w500/cvoSPs6We2u88mXz2vSqjbd4kQ0.jpg" },
  //   { id: 86769, media_type: "tv", title: "Ares", poster_path: "https://image.tmdb.org/t/p/w500/iVUiL32XmwQyba3EH2E3g77dXge.jpg" },
  //   { id: 118956, media_type: "tv", title: "DOTA: Dragon's Blood", poster_path: "https://image.tmdb.org/t/p/w500/s1wP1YeQS9fgSHiXZ3yJb2ufB2D.jpg" },
  //   { id: 49013, media_type: "movie", title: "Cars 2", poster_path: "https://image.tmdb.org/t/p/w500/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg" },
  //   {id: 260514, media_type: "movie", title: "Cars 3", poster_path: "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg"},
  //   {id: 587807, media_type: "movie", title: "Tom & Jerry", poster_path: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg"},
  //   {id: 399566, media_type: "movie", title: "Godzilla vs. Kong", poster_path: "https://image.tmdb.org/t/p/w500/5KYaB1CTAklQHm846mHTFkozgDN.jpg"},
  //   {id: 1682, media_type: "movie", title: "Mothra vs. Godzilla", poster_path: "https://image.tmdb.org/t/p/w500/rDTf5sXRM9wKCj8pqcjvGnHFSvH.jpg"},
  //   {id: 1679, media_type: "movie", title: "Godzilla Raids Again", poster_path: "https://image.tmdb.org/t/p/w500/ulH1XvZlxuwi34Vcc3iomekcZgO.jpg"},
  //   { id: 39256, media_type: "movie", title: "Godzilla 1985", poster_path: "https://image.tmdb.org/t/p/w500/blKtf1L6LA3mFW8aVJzxnaI8CLn.jpg" },
  //   { id: 315011, media_type: "movie", title: "Shin Godzilla", poster_path: "https://image.tmdb.org/t/p/w500/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg" }]

  

  constructor(private router: Router,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    console.log("watch_list: ", this.watch_list);
    console.log("id_array_order: ", this.id_array_order);
    console.log("rev_order_array: ", this.rev_order_array);
    console.log("id_values_for_lookup: ", this.id_values_for_lookup);

    for (var i = 0; i < this.rev_order_array.length; i++){
      var idVal = this.rev_order_array[i];
      var dict = {};
      // console.log("for loop")
      if (this.watch_list.includes(idVal) == true) {
        // console.log("if loop");
        dict['id'] = idVal;
        dict['media_type'] = this.id_mediaType[idVal]
        dict['title'] = this.id_values_for_lookup[idVal].lookup_title;
        dict['poster_path'] = this.id_values_for_lookup[idVal].lookup_poster_path;
        this.new_watch_list_order_for_frontend.push(dict);
        // console.log("dict: ", dict)
      }
    }

    console.log("new_watch_list_order_for_frontend: ", this.new_watch_list_order_for_frontend);


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
      margin_desk: this.desktop_screen_size,
      margin_mob: this.mobile_screen_size
    }
  }

  setSize() {
    return {
      size_desk: this.desktop_screen_size,
      size_mob: this.mobile_screen_size
    }
  }

  setHover() {
    return {
      hovered_prop: this.mobile_screen_size,
      nonhovered: this.desktop_screen_size
    }
  }


  onSelect(img) {
    // check where to redirect [from localStorage] - could be tv or movie
    // console.log("img: ", img)
    var media_json_string = localStorage.getItem("media_type")
    var media_json = JSON.parse(media_json_string)
    var get_media_type = media_json[img.id.toString()]

    if (get_media_type == "movie") {
      this.router.navigate(['/watch/movie', img.id]);
    }
    else {
      this.router.navigate(['/watch/tv', img.id]);
    }
    
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
  }

}
