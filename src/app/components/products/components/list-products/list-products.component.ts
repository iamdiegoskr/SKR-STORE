import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private service:ProductsService) {
    this.products = this.service.getAllProducts();
  }

  ngOnInit(): void {}

  productAddCart(product:Product){
    console.log(`El producto ${product.title} ha sido agregado al carrito`);
  }
}
