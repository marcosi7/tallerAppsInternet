import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlApi_char = 'https://rickandmortyapi.com/api/character';
  public urlApi_loc = 'https://rickandmortyapi.com/api/location';
  public urlApi_ep = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  public getDataFromUrl (url: string) : Observable<any> {
    return this.http.get<any>(url);
  }

  private urls = [
    this.urlApi_char,
    this.urlApi_loc,
    this.urlApi_ep
    ];
   
  public getData () : Observable<any> {
    return forkJoin(
    this.urls.map(url => this.getDataFromUrl(url))
    );
  }

  /*public getData () : Observable<any> {
    return this.http.get<any>(this.urlApi_char);
  }*/

}
