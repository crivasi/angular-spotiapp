import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = {};
  topTracks:any = [];
  loadingArtist: boolean;
  loadingTracks: boolean;

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 
    this.router.params.subscribe( params => {
      this.loadingArtist = true;
      this.loadingTracks = true;
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit() {
  }

  getArtista(id:string){
    this.spotify.getArtista( id )
      .subscribe(artista => {
        this.artista = artista;
        this.loadingArtist = false;
      });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks( id )
    .subscribe(topTracks => {
      this.topTracks = topTracks;
      this.loadingTracks = false;
      console.log(this.topTracks);
    });    
  }

}
