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

  //Forma 1
  deleteProduct(id:string){
    this.service.deleteProduct(id).subscribe(data=>{
      this.products = this.products.filter(element=> element.id!=id)
    })
  }

  deleteProduct2(id:string){
    this.service.deleteProduct(id).subscribe(productRemoveIsOk=>{
      if(productRemoveIsOk){

        const indexToRemove = this.products.findIndex(product => product.id == id)
        this.products.splice(indexToRemove,1)
        this.products = [...this.products]

      }else{
        console.log("Error, el producto no pudo ser elimnando.");
      }
    })
  }


}
