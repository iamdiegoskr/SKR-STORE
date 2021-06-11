import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/interfaces/product';

import {Router} from '@angular/router'
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  discount:number = 10;

  @Input() product: Product;

  @Output() productAddCart = new EventEmitter<Product>();

  currentDate : Date = new Date()

  constructor(private route:Router,
              private serviceCart:CartService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  //Se ejecuta solo una vez, cuando el componente ya fue puesto en pantalla
  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }

  addCart() {
    // this.productAddCart.emit(this.product);
    console.log("Añadido al carrito");
    this.serviceCart.addCart(this.product)
  }

  navigateItemDetail(idProduct:string){
    this.route.navigate(['/products',idProduct])
  }
}
