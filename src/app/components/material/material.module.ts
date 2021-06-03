import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionColorComponent } from './select/select-option-color/select-option-color.component';



import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

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
    MatBadgeModule,
    MatRadioModule,
    MatCardModule
  ],
  exports:[
    SelectOptionColorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
