import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
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
    {path:'products',component:ListProductsComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
