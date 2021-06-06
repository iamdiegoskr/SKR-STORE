import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';

import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }

  /**
   * Listar todos los productos de nuestra api
   */
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.baseURL}/products`)
  }

  /**
   * Busca un producto segun su ID.
   * @param id Identificador del producto.
   */
  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.baseURL}/products/${id}`)
  }

  /**
   * Crear un nuevo producto
   */
  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${environment.baseURL}/products`, product);
  }

  /**
   * Metodo para actualizar los datos de un producto en especifico.
   */
  updateProduct(id:string,changes:Partial<Product>){
    return this.http.put<Product>(`${environment.baseURL}/products/${id}`,changes);
  }

  /**
   * Eliminar un producto
   */
  deleteProduct(id:string){
    return this.http.delete(`${environment.baseURL}/products/${id}`);
  }

}
