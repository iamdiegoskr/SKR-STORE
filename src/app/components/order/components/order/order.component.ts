import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { orderProducts } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'actions',
    'total',
  ];

  products$: Observable<Product[]>;

  orderProducts$: Observable<
    {
      id: string;
      image: string;
      title: string;
      price: number;
      description: string;
      quantity: number;
      priceTotal:number;
    }[]
  >;

  constructor(private serviceCart: CartService) {
    // this.products$ = this.serviceCart.cart$;

    this.orderProducts$ = this.serviceCart.cart$.pipe(
      map((products) => {

        const uniqueProducts = products.filter((product, index, array) =>
            index === array.findIndex((p) => p.id === product.id)
        );

        const productsWithQuantities = uniqueProducts.map((uniqueProduct) => {

          const timesRepeated = products.filter((item) => item.id === uniqueProduct.id).length;

          return { ...uniqueProduct, quantity: timesRepeated, priceTotal: uniqueProduct.price*timesRepeated};
        });
        return productsWithQuantities;
      })
    );
  }

  incrementProduct(order: any) {
    order.quantity = order.quantity + 1;
  }

  decrementProduct(order: any) {
    order.quantity = order.quantity - 1;
  }

  ngOnInit(): void {}

  removeProductCart(id: string) {
    this.serviceCart.removeCart(id);
  }
}
