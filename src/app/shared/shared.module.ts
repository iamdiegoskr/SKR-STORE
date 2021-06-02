import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { ImagesnotfoundDirective } from './directives/imagesnotfound/imagesnotfound.directive';
import { MaterialModule } from '../components/material/material.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ExponentialPipe,
    ImagesnotfoundDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ExponentialPipe,
    ImagesnotfoundDirective
  ]
})
export class SharedModule { }
