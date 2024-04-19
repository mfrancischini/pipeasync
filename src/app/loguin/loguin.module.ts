import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';
import { LoguinRoutingModule } from './loguin-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LoguinComponent
  ],
  imports: [
    CommonModule,
    LoguinRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
    
  ]
})
export class LoguinModule { }
