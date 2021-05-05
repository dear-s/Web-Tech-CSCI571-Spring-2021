import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, OperatorFunction, BehaviorSubject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


const WIKI_URL = 'https://sanya-usc-films.wl.r.appspot.com/searchbar';
const PARAMS = new HttpParams({
  // fromObject: {
    // action: 'opensearch',
    // format: 'json',
    // origin: '*'
  // }
});

@Injectable()
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    console.log("term: ", term)
    if (term === '') {
      return of([]);
    }

    return this.http
      .get<any>(WIKI_URL, {params: PARAMS.set('search', term)}).pipe(
        map(response => response.searched_results)
    );
    
  }

  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [WikipediaService],
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit{

  mobile_screen_size; // boolean
  desktop_screen_size; // boolean
  
  title = 'angular-app';
  formatter = (x: { title: string }) => x.title;
  img = (x: { backdrop_path: string }) => x.backdrop_path;
  id = (x: { id: any }) => x.id;

  // inputValue = (<HTMLInputElement>document.getElementById('typeahead-http')).value;

  json_api_data;
  
  navbarOpen = false;

  model: any;
  searching = false;
  searchFailed = false;
  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private http: HttpClient,
    private _service: WikipediaService,
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {

    this.http.get("https://sanya-usc-films.wl.r.appspot.com/home_page")
      .subscribe((data) => {
        this.json_api_data = data;

        // initialize localStorage keys
        var new_empty_json1 = { "id_array": [] }
        var make_it_string1 = JSON.stringify(new_empty_json1);
        localStorage.setItem("cont_watching", make_it_string1)

        var new_empty_json2 = {}
        var make_it_string2 = JSON.stringify(new_empty_json2);
        localStorage.setItem("cont_watching_objects", make_it_string2)

        var new_empty_json3 = {}
        var make_it_string3 = JSON.stringify(new_empty_json3);
        localStorage.setItem("media_type", make_it_string3)

        var new_empty_json4 = { 'list': [] }
        var make_it_string4 = JSON.stringify(new_empty_json4)
        localStorage.setItem("watchlist", make_it_string4)

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

  fixNavBar() {
    return {
      fixed_top: this.mobile_screen_size
  }
  }

  left_right_toggle() {
    return {
      ml_auto: this.mobile_screen_size,
      mr_auto: this.desktop_screen_size
    }
  }


  search: OperatorFunction<string, readonly {title, backdrop_path}[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  method_selected($e, input) {
    // console.log("clicked... bitches!!")
    // console.log(e.item) // whole object
    $e.preventDefault();

    if ($e.item.media_type == "movie") {
      this.router.navigate(['/watch/movie', $e.item.id]);
    }
    else {
      this.router.navigate(['/watch/tv', $e.item.id]);
    }
    input.value = '';

  }

  

}






