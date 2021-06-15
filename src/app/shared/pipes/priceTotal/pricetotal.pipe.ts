import { Pipe, PipeTransform } from '@angular/core';
import { orderProducts } from 'src/app/interfaces/order';

@Pipe({
  name: 'pricetotal'
})
export class PricetotalPipe implements PipeTransform {

  transform(order: orderProducts): number{
    order.totalByProduct = order.totalByProduct*order.quantity;
    return order.totalByProduct;
  }

}
