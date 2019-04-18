import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient ) {

  }
  getQuery(query:string){
    const URL:string = `https://api.spotify.com/v1/${ query }` 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBVPwoXlm1hmsO_W5BD9wmnKaYyt6g_8QdfAPnrvC3nZBrOemMUiR7T-NOObuykW_ubUk_PdUYQ3GhhTt0'
    });
  
    return this.http.get(URL, { headers } );
  }

  getNewReleases(){

   return this.getQuery('browse/new-releases?limit=20')
   .pipe(map( data => data['albums'].items ));
   
  }

  getArtists(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=50`)
    .pipe( map( data => data['artists'].items) );

  }

  getArtist(id: string){

    return this.getQuery(`artists/${id}`);
    

  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
       .pipe( map( data => data['tracks']) );

  }


}
