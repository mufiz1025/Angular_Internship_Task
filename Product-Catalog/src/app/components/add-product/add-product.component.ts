import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,  Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';


@Component({
  selector: 'app-add-product',
  imports: [RouterOutlet , RouterLink ,ReactiveFormsModule , FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
 
   ProductForm! : FormGroup; 
   

   public InventoryStatus = ['In Stock' , 'Out of Stock'];

   constructor( private fbuilder : FormBuilder , private _dataService : ProductDataService){}
   
   get productName(){
    return this.ProductForm.get('productName');
   }
   get productPrice(){
       return this.ProductForm.get('productPrice');
   }

   

  ngOnInit(): void {
    this.ProductForm =this.fbuilder.group({
      productName :['' , [Validators.required ,Validators.minLength(3)]],
      productPrice :['' , [Validators.required , Validators.min(1)]],
      productDescription :[''],
      productStatus :[''],
      productId :['']
    })
  }
  
  
  onSubmit(){
    console.log(this.ProductForm.value);
    this._dataService.setData(this.ProductForm.value) ;
   
  }
}
