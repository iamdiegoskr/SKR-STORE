import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '../components/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { DashComponent } from './components/dash/dash.component';

import { TableComponent } from './components/table/table.component';

import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormProductComponent } from './components/form-product-create/form-product.component';
import { FormProductEditComponent } from './components/form-product-edit/form-product-edit.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashComponent, TableComponent, ListProductsComponent, FormProductComponent, FormProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
  ]
})
export class AdminModule { }
