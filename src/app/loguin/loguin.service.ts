import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Imaestros } from '../common/interfaces';

@Injectable({ providedIn: 'root' })
export class LoguinService {
  private _authUser$ = new BehaviorSubject<Imaestros | null>(null);
  public authUser$ = this._authUser$.asObservable();

  login(): void {
    this._authUser$.next({
      codigo: '001',
      nombre: 'Maria',
      apellido: 'Fernandez',
      curso_titular: 'Angular',
    });
  }

  logout(): void {
    this._authUser$.next(null);
  }
}
