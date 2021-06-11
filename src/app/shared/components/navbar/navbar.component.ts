import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  quantity:Observable<number>

  constructor(private serviceCart:CartService) {

    this.quantity = this.serviceCart.cart$
    .pipe(
      map(products=>products.length)
    );
  }

  ngOnInit(): void {
  }


}
