import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';
import { LoguinRoutingModule } from './loguin-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LoguinComponent
  ],
  imports: [
    CommonModule,
    LoguinRoutingModule,
    MatCardModule
  ]
})
export class LoguinModule { }
