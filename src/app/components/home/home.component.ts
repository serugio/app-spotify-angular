import { Component, OnInit, Output } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService )
  {
    this.error = false;
    this.loading=true;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
      this.newReleases=data;
      this.loading=false;
      },
      (errorServicio)=>{
        this.error=true;
        this.loading=false;
        this.mensajeError= errorServicio.error.error.message;
      });
  }



}
