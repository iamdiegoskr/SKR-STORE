import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionColorComponent } from './select/select-option-color/select-option-color.component';


import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectOptionColorComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports:[
    SelectOptionColorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
