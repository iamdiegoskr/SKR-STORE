import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {take} from 'rxjs/operators'
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  id: string;
  // product:Product;
  product:Observable<Product>;
  loading:true;


  constructor(private route: ActivatedRoute,
              private service:ProductsService
              ) {}

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.fetchProduct(this.id)
    })

  }

  fetchProduct(id:string){
    this.product = this.service.getProductById(id);
  }

  // fetchProduct(id:string){
  //   this.service.getProductById(id).subscribe(product=>{
  //     this.product=product;
  //   })
  // }

  changeColor(color:String){
    console.log("new color is : " + color);
  }

}
