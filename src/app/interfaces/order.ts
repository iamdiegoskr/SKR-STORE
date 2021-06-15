import { Product } from "./product";

export interface orderProducts{
    quantity:number,
    product:Product,
    totalByProduct?:number
}