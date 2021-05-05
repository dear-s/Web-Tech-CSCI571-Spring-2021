import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tv-cast',
  templateUrl: './tv-cast.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tv-cast.component.css']
})

export class TvCastComponent implements OnInit {

  final_id;
  id: Number;
  json_data_list;

  large_screen;
  small_screen;

  //modal
  closeResult: string;
  get_person_id;
  json_pdata;
  json_reviews;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number         

      this.http.get(`https://sanya-usc-films.wl.r.appspot.com/detailsPage2/${this.id}`)
        .subscribe((data) => {
          console.log("data from movie detailsPage.js: ", data);
          this.displayData(data);
        })
      
      // let's get - movie reviews endpoint
      this.http.get(`https://sanya-usc-films.wl.r.appspot.com/tvReviews/${this.id}`)
        .subscribe((data) => {
          console.log("data from movie movieReviews.js: ", data);
          this.json_reviews = data;
        })
    });

    // console.log(screen.width);
    if (screen.width > 600) {
      // add col-2
      this.large_screen = true;
      this.small_screen = false;
    }
    else {
      this.large_screen = false;
      this.small_screen = true;
    }
  }

  displayData(data) {
    this.json_data_list = data;
  }

  noIndicators() {
    return {
      no_indicators_cast: this.small_screen
    }
  }


  cast_image() {
    return {
      cast_image_size_large: this.large_screen,
      cast_image_size_small: this.small_screen
    }
  }

  select_cols() {
    return {
      col_9: this.large_screen,
      col_sm_9: this.small_screen
    }
  }

  rev_avatar() {
    return {
      rev_image_desk: this.large_screen,
      rev_image_mob: this.small_screen
    }
  }

  rate_span() {
    return {
      rate_span_desk: this.large_screen,
      rate_span_mob: this.small_screen
    }
  }


  // modal function
  openVerticallyCentered(content, p_id) {
    // this.modalService.open(content, { centered: true });
    this.modalService.open(content, { size: 'lg', centered: true });

    // can we extract id of the person
    // whom we clicked
    this.get_person_id = p_id;

    this.http.get(`https://sanya-usc-films.wl.r.appspot.com/personDetails/${this.get_person_id}`)
      .subscribe((data) => {
        console.log("data from personDetails.js: ", data);
        this.json_pdata = data;
      })

  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }


}
