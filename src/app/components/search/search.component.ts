import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading:boolean;
  messageError:string;

  constructor(private spotify:SpotifyService) { }

  buscarArtista(valor:string) {
    if(valor){
      this.loading = true;
      this.spotify.getArtistas(valor)
      .subscribe( (data:any) => {
        this.artistas = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.messageError = errorService.error.error.message
      });
    }
  }

  ngOnInit() {
  }

}
