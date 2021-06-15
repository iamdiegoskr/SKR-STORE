import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { ImagesnotfoundDirective } from './directives/imagesnotfound/imagesnotfound.directive';
import { MaterialModule } from '../components/material/material.module';

import {ReactiveFormsModule} from '@angular/forms';
import { PricetotalPipe } from './pipes/priceTotal/pricetotal.pipe';
import { GroupproductsPipe } from './pipes/groupProducts/groupproducts.pipe'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ExponentialPipe,
    ImagesnotfoundDirective,
    PricetotalPipe,
    GroupproductsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ExponentialPipe,
    ImagesnotfoundDirective,
    PricetotalPipe,
    GroupproductsPipe
  ]
})
export class SharedModule { }
