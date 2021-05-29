import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',
        loadChildren:()=> import('./components/home/home.module').then(m => m.HomeModule)
      },
      { path: 'products',
        loadChildren:()=> import('./components/products/products.module').then(m=> m.ProductsModule)
      },
      { path: 'about',
        loadChildren:()=> import('./components/about/about.module').then(m=>m.AboutModule)
      },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
