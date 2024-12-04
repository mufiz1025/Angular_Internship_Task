import { Injectable } from '@angular/core';
import { Product } from '../model/product-entity';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
   
 
   
   private Product_Details: Product[] = [
    {
       productName: 'mobile phone',
       productPrice : 23000,
       productDescription: 'best ever cell phone in the market',
       productStatus : true,
       productId :1
    },
    {
      productName: 'groceries',
      productPrice : 230,
      productDescription: 'you get all the fresh groceries',
      productStatus : true ,
      productId : 2
   },
   {
    productName: 'outfit store',
    productPrice : 1499,
    productDescription: 'you get all the fashion products over here.',
    productStatus : false ,
    productId : 3
   },
   {
    productName: 'home store',
    productPrice : 4999,
    productDescription: 'You get all the home Products here.',
    productStatus : true ,
    productId : 4
   }
  ]
  getData() : Product[]{
    return this.Product_Details ;
  }
  setData(productValues : Product) {
    this.Product_Details.push(productValues);
  }
  get productCount(): number {
    return  this.Product_Details.length;  // Return the number of products
  }
  

  constructor() {
   
   }

}
