import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {take} from 'rxjs/operators'
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  id: string;
  product:Product;
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
    this.service.getProductById(id).subscribe(product=>{
      this.product=product
      console.log(this.product);
    })
  }

  changeColor(color:String){
    console.log("new color is : " + color);
  }

  createNewProduct(){
    const newProduct:Product = {
      id:'2020',
      image:'https://noticias24carabobo.com/wp-content/uploads/2017/01/homero1.jpg',
      description:'Homero movil  bla bla bla',
      title:'HomeroMovil',
      price: 180000
    }

    this.service.createProduct(newProduct).subscribe(product=>{
      console.log(product);
    })

  }


  updateProduct(){

    const changesProduct:Partial<Product>= {
      description:'El carro de homero skeeit keloke',
      price: 190000
    }

    this.service.updateProduct('2020',changesProduct).subscribe(productUpdate=>{
      console.log(productUpdate);
    })
  }

  deleteProduct(){
    this.service.deleteProduct('2020').subscribe(productDelete=>{
      console.log(productDelete);
    })
  }

}
