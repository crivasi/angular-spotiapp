import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //ejemplo de peticion de paises
  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe((respuesta: any) => {
  //     this.paises = respuesta;
  //     console.log(respuesta);
  //   })
  // }

  nuevasCanciones: any[] = [];

  loading:boolean = true;
  messageError:string;

  constructor(private spotify:SpotifyService){
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      this.messageError = errorService.error.error.message;
    });
  }

  ngOnInit() {
  }

}
