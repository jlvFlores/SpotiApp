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
      'Authorization': 'Bearer BQAzErqgE0_tto8grVAFe-72n_mD-YopO8_WWYiOvPAwPid8nK1VYZjZ2Q8HBdGxqJLp4h2ghSbbSqLEMiG3PaauaEsqdL62VK9dHv3iJp8OZkWEDuKBofaZkROZ0OCp0HyCwSfr9L-TLAWxtgsbbf2HgcmR0iw'
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
