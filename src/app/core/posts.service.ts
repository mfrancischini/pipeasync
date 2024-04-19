import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ialumnos, Inotas } from '../common/interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<Ialumnos[]>{
    const postUrl = `assets/alumnos.json`;
    return this.httpClient.get<Ialumnos[]>(postUrl).pipe(delay(2000));
  }
  getPostNotas(): Observable<Inotas[]>{
    const postUrl = `assets/notas.json`;
    return this.httpClient.get<Inotas[]>(postUrl).pipe(delay(1000), 
    map(notas => {
     
      return notas.map(nota => {
        nota.nota = Math.round(nota.nota); 
        return nota;
      });
    }));
  }

}
