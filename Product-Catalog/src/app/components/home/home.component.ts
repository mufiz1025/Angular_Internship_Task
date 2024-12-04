import { Product } from './../../model/product-entity';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private _productService : ProductDataService , private router :Router){
    this.serverData = this._productService.getData();
  }
  serverData : Product[] = [];

  onClick(data:Product){
    this.router.navigate(['/details' , data.productId])
     
  }
  
 

}
