import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopolinoService {

  constructor(private http: HttpClient) { }

  
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>("./assets/settings/heroes.json")
  }
  

}


export interface Hero {
  id: number;
  name: string;
}