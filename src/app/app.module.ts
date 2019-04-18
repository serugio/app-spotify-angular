import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './components/shared/cards/cards.component';

//pipes

import { NoimagePipe } from 'src/app/pipes/noimage.pipe';
import { DomseguroPipe } from 'src/app/pipes/domseguro.pipe';

//importar rutas
import { ROUTES } from './app.routes';
import {RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
