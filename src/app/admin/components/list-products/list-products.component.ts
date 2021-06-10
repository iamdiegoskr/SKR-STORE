import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/interfaces/product';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.fecthDataProduct();
  }

  fecthDataProduct() {
    this.service.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  //Forma 1
  deleteProduct(id: string) {
    console.log(id);
    Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: 'Si eliminas el producto, sera eliminado por completo y no habra vuelta atras',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(id).subscribe((productRemoveIsOk:boolean) => {

          console.log(productRemoveIsOk);

          if (productRemoveIsOk) {

            this.products = this.products.filter((element) => element.id != id);

            Swal.fire(
              'Se ha eliminado con exito',
              'Tu producto ha sido eliminado correctamente',
              'success'
            );
          }else{
            console.log('error');
          }
        });
      }
    });
  }

  // deleteProduct2(id: string) {
  //   this.service.deleteProduct(id).subscribe((productRemoveIsOk) => {
  //     if (productRemoveIsOk) {
  //       const indexToRemove = this.products.findIndex(
  //         (product) => product.id == id
  //       );
  //       this.products.splice(indexToRemove, 1);
  //       this.products = [...this.products];
  //     } else {
  //       console.log('Error, el producto no pudo ser elimnando.');
  //     }
  //   });
  // }
}
