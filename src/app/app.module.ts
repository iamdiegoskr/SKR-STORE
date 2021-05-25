import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { ImagesnotfoundDirective } from './directives/imagesnotfound/imagesnotfound.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    ListProductsComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    CartComponent,
    ExponentialPipe,
    ImagesnotfoundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
