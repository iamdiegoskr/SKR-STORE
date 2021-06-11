import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Product[] = [];
  cart = new BehaviorSubject<Product[]>([])//Observable, flujo de datos en el tiempo


  /**
   * Creamos una variable publica, que sea preguntada por cualquier componente y que sea de tipo observable.
   * Para que cualquiera se suscriba  y tener cambios en tiempo real
   */

  cart$ = this.cart.asObservable();



  constructor() { }

  addCart(product:Product){
    this.products = [...this.products, product] //Nos evitamos errores de referencia al mismo array,creamos un nuevo estado del arreglo
    this.cart.next(this.products)
    //Ahora emitinos a los componentes que estan suscritos que hubo un cambio.
  }
}
