import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service:ProductsService) {
  }

  ngOnInit(): void {
    this.fetchAllProducts()
  }

  productAddCart(product:Product){
    console.log(`El producto ${product.title} ha sido agregado al carrito`);
  }

  fetchAllProducts(){
    this.service.getAllProducts().subscribe(data=>{
      this.products = data
    })
  }

}
