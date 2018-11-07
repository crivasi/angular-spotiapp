import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//se importa para poder operar sobre observables
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'BQCBj-IgdBX-Dp0ykWS2UVY65He4rxNHUNCXH6FAxKmLfRvFut_htUhohqMUMJHkt8XNiOyRQLROoszm1Fg';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`
    });
    return this.http.get(`${ url }`,{ headers });
  }

  getNewReleases() {
    let query = 'browse/new-releases?limit=10'; 
    // se hace lo del pipe para poder retornar solo los items 
    //y en el componente no tener que acceder a ellos
    return this.getQuery(query)
            .pipe( map( data => data['albums'].items ));   
  }

  getArtistas(termino:string) {
    let query = `search?q=${ termino }&type=artist&limit=10`;
    return this.getQuery(query)
            .pipe( map( data => data['artists'].items ));
  }

  getArtista(id:string) {
    let query = `artists/${id}`;
    return this.getQuery(query);
            //.pipe( map( data => data['artists'].items ));
  }

  getTopTracks(id:string) {
    let query = `artists/${id}/top-tracks?country=US`;
    return this.getQuery(query)
            .pipe( map( data => data['tracks']));
  }
}
