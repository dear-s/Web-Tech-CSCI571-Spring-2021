import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  json_data_list;
  

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://sanya-usc-films.wl.r.appspot.com/home_page")
      .subscribe((data) => {
        console.log("data: ", data);
        this.displayData(data);
      })
  }

  displayData(data) {
    this.json_data_list = data;
  }

  fetch_string1 = localStorage.cont_watching;
  fetch_json1 = JSON.parse(this.fetch_string1);

  get_id_array = this.fetch_json1.id_array;

}
