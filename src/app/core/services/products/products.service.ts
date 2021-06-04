import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlAPI: string = "https://platzi-store.herokuapp.com/products"

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI)
  }

  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.urlAPI}/${id}`)
  }


  // getProductById(id:string):Product{
  //   return this.products.find(product => product.id==id);
  // }

}
