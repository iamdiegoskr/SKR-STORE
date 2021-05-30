import { Injectable } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    products = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 60000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 70000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 1000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 50000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 5000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 8000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '7',
      image: 'assets/images/stickers8.png',
      title: 'Stickers',
      price: 8000,
      description: 'bla bla bla bla bla',
    }
  ];

  constructor() { }

  getAllProducts():Array<Product>{
    return this.products;
  }

  getProductById(id:string):Product{
    return this.products.find(product => product.id==id);
  }

}
