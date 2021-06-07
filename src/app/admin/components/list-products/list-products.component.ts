import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products:Product[] = []
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
        this.fecthDataProduct()
  }

  fecthDataProduct(){
    this.service.getAllProducts().subscribe(products=>{
      this.products=products
      console.log(this.products);
    })
  }



}
