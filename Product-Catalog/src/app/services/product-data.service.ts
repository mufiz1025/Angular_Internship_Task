import { Product } from './../model/product-entity';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


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
      productStatus : false ,
      productId : 2
   },
   {
    productName: 'outfit store',
    productPrice : 1499,
    productDescription: 'you get all the fashion products over here.',
    productStatus : true ,
    productId : 3
   },
   {
    productName: 'home store',
    productPrice : 4999,
    productDescription: 'You get all the home Products here.',
    productStatus : false ,
    productId : 4
   }
  ]
    
  getData() : Product[]{
   return this.Product_Details;
  }
   getDatabyId(id :number ) : Product {
      let product = this.Product_Details.find(x => x.productId === id);
      if(product)
      {
        return product;
      }
       return new Product();
   }

  setData(productValues : Product) {
    
    this.Product_Details.push(productValues);
  }
  get productCount(): number {
    return  this.Product_Details.length;   // Return the number of products
  }
  

  constructor() {}
   
   

}
