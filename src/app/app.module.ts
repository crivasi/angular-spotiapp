import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import para el router
import { RouterModule, ROUTES } from '@angular/router';

//import para hacer las peticiones
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//importar rutas
import { APP_ROUTES } from './app.routes';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPreviewPipe } from './pipes/domseguropreview.pipe';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPreviewPipe,
    TarjetasComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
