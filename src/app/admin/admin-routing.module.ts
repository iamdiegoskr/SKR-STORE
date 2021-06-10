import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { FormProductComponent } from './components/form-product-create/form-product.component';
import { FormProductEditComponent } from './components/form-product-edit/form-product-edit.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'', component:NavComponent,
  children:[
    {path:'create',component:ProductFormComponent},
    {path:'dash', component:DashComponent},
    {path:'table', component:TableComponent},
    {path:'products',component:ListProductsComponent},
    {path:'products/create',component:FormProductComponent},
    {path:'products/edit/:id',component:FormProductEditComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
