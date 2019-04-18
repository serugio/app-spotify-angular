import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent  {

  @Input() newReleases: any[];
  
  constructor(private _router: Router) {
    
   }

   verArtista(item: any)
    {
     let artistId;
    if(item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }
     this._router.navigate([ '/artist', artistId ]);
   }

   
    

}
