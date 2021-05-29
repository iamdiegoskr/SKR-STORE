import { Component, OnInit, SimpleChanges } from '@angular/core';
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

  id: string;
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

  getProduct(id:string){
    this.product=this.service.getProductById(id)
    console.log(this.product)
  }

  changeColor(color:String){
    console.log("new color is : " + color);
  }


}
