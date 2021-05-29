import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { HomeModule } from './components/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { ImagesnotfoundDirective } from './directives/imagesnotfound/imagesnotfound.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { SelectOptionColorComponent } from './components/material/select/select-option-color/select-option-color.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsModule } from './components/products/products.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AboutComponent,
    CartComponent,
    ExponentialPipe,
    ImagesnotfoundDirective,
    HighlightDirective,
    ContactComponent,
    SelectOptionColorComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HomeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
