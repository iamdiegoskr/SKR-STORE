import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductsComponent } from './components/list-products/list-products.component';


import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProductsModule { }
