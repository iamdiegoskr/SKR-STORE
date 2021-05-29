import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { HomeModule } from './components/home/home.module';
import { ProductsModule } from './components/products/products.module';
import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { ImagesnotfoundDirective } from './directives/imagesnotfound/imagesnotfound.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectOptionColorComponent } from './components/material/select/select-option-color/select-option-color.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CartComponent,
    ImagesnotfoundDirective,
    HighlightDirective,
    ContactComponent,
    SelectOptionColorComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HomeModule,
    ProductsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
