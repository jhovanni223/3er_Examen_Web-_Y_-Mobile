import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Universidades } from './universidades';


@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {


private url:string="http://universities.hipolabs.com/search?country";


  constructor( private http:HttpClient) { }


  //Obtenet Universidades
  getAll():Observable<Universidades[]>{
    return this.http.get<Universidades[]>(this.url)
  }

  //Obtenet Pais
  get(pais:string):Observable<Universidades>{
    return this.http.get<Universidades>(this.url+'='+pais)
  }

}
