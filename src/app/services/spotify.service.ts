import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('spotify listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB0VB-gA7YYmgRXfvro4UWb-4qStKnNCbdmJ3sEw6lRl9hA873gaWAK2EGCr07rNDXcCM2guofn7ApDaf6SfZElr0keA-yZdpFIPK5JZlf3V7QMtEo95gYsmx2LnUuDZbDF58ATgQiWvx_noFILm0OKekiM6Ys'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe( data => {
          console.log(data);
        });
  }
}
