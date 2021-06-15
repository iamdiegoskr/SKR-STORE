import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import {BehaviorSubject} from 'rxjs'
import { orderProducts } from 'src/app/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Product[] = [];


  private cart = new BehaviorSubject<Product[]>([])//Observable, flujo de datos en el tiempo
  private orders = new BehaviorSubject<orderProducts[]>([]);


  /**
   * Creamos una variable publica, que sea preguntada por cualquier componente y que sea de tipo observable.
   * Para que cualquiera se suscriba  y tener cambios en tiempo real
   */

  cart$ = this.cart.asObservable();
  orders$ = this.orders.asObservable();



  constructor() { }

  addCart(product:Product){
    this.products = [...this.products, product] //Nos evitamos errores de referencia al mismo array,creamos un nuevo estado del arreglo
    this.cart.next(this.products)
  }

  removeCart(id:string){
    this.products = this.products.filter(product => product.id!=id);
    this.cart.next(this.products)
  }

  incrementOrder(){
  }

  decrementOrder(){
  }


}
