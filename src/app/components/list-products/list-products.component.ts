import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import { products } from '../../util/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Array<Product> = [];

  constructor() {
    this.products = products;
  }

  ngOnInit(): void {}

  productAddCart(product:Product){
    console.log(`El producto ${product.title} ha sido agregado al carrito`);
  }
}
