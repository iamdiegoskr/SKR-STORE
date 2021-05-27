import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  discount:number = 10;

  @Input() product: Product; //Recibe lo que le manda el padre.

  @Output() productAddCart = new EventEmitter<Product>();

  currentDate : Date = new Date()

  constructor() {
    // console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('ngOnChanges');
    // console.log(changes);
  }

  //Se ejecuta solo una vez, cuando el componente ya fue puesto en pantalla
  ngOnInit(): void {
    //Aqui se recomienda llamar a los servicios de datos.
    // console.log("ngOnInit");

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // console.log("ngDoCheck")
  }

  ngOnDestroy(): void {
    // console.log("Sere destruido");
  }

  addCart() {
    this.productAddCart.emit(this.product);
  }
}
