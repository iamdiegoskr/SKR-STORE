import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {take} from 'rxjs/operators'
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product:Product;

  constructor(private route: ActivatedRoute,
              private service:ProductsService
              ) {}

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.getProduct(this.id)
    })

  }

  getProduct(id:number){
    this.product=this.service.getProductById(id.toString())
    console.log(this.product)
  }
}
