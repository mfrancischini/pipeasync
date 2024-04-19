import { Component } from '@angular/core';
import { PostsService } from '../core/posts.service';
import { Observable, catchError } from 'rxjs';
import { Ialumnos, Inotas } from '../common/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {

  public hasError: boolean = false;
  public post$!: Observable<Ialumnos[]>;
  public postNotas$!: Observable<Inotas[]>;  
  constructor(private postService: PostsService){
    this.post$ = this.postService.getPost().pipe(catchError(error => {
      console.error(error);
      this.hasError = true;
      throw new Error(error);
    }))

    this.postNotas$ = this.postService.getPostNotas().pipe(catchError(error => {
      console.error(error);
      this.hasError = true;
      throw new Error(error);
    }))
  }

  mostrarNota(codigo: string): void {
    this.postService.getPostNotas().subscribe(notas => {
      const notaAlumno = notas.find(nota => nota.codigo_alumno === codigo);
      if (notaAlumno) {
        if (notaAlumno.nota < 4) {
          Swal.fire({
            icon: 'error',
            title: 'Desaprobado',
            text: `El alumno ${codigo} está desaprobado - la nota es ${notaAlumno.nota}.`
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Aprobado',
            text: `El alumno con código ${codigo} está aprobado - la nota es ${notaAlumno.nota}.`
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `No se encontró el alumno con código ${codigo}.`
        });
      }
      
    });
  }

}
