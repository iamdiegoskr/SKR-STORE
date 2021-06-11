import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  quantity:number = 0;

  constructor(private serviceCart:CartService) {

    // this.serviceCart.cart$.subscribe(products=>{
    //   console.log("Desde el navbar");
    //   console.log(products);
    //   this.quantity = products.length;
    // })

    this.serviceCart.cart$
    .pipe(
      map(products=>products.length)
    )
    .subscribe(productsQuantity=>{
      console.log("Desde el navbar");
      this.quantity = productsQuantity;
    })

  }

  ngOnInit(): void {
  }


}
