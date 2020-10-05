import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (resp: any) => {
        this.paises = resp;
        console.log(resp);
      });

  }

  ngOnInit(): void {
  }

}
