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
      'Authorization': 'Bearer BQCwdC72y04CpXif0YYA2MOFIT5GNMFi6ePgScdABXXF9ou9wUXkyMOUDlD8Nbr5aFfAA-891EKBohVwOpbmWBL-KDFi1COjg6df8C8lL-5mRIJYbToS4ONttrdFM9I7C6TDre-tALPh9PBJeoSW6dHK6wtLV1Q'
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
