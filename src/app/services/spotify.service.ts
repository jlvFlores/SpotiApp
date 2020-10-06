import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBu1kS6QJMsc2ITFRyy9v731-TrOOefpTZxZtVSNk5NJj6AHB1S_yXIquY6BcnGBl9utigqI7Z_ZAf1iKJ0JM-Op_O7OewQrnIiMspGYF9Xy4kHamP-EWfrS5LG1b7gYiYX1zjCSUs0Wn37xYCI0dL9H2osE2I'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
        .pipe( map( data => data['albums'].items ));
  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe( map( data => data['artists'].items ));
  }
}
