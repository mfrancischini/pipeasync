import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AlumnosModule { }
