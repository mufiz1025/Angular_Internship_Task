import { Product } from './../../model/product-entity';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';
import { EditProductComponent } from "../edit-product/edit-product.component";



@Component({
  selector: 'app-home',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  serverData : Product[] = [];

  constructor(private _productService : ProductDataService , private router :Router){
  }
  
  ngOnInit(): void {
    this.serverData = this._productService.getData();
    console.log(this.serverData.values);
    
  }
  
  onDetails(data:Product){
    this.router.navigate(['/details' , data.productId])
  }
  onEdit(data:Product){
    this.router.navigate(['/edit' , data.productId])
  }
}
