import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class AngularMaterialModule { }
