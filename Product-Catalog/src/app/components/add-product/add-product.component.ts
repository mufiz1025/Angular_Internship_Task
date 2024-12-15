import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,  Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';
import { EditProductComponent } from '../edit-product/edit-product.component';




@Component({
  selector: 'app-add-product',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, FormsModule, CommonModule, EditProductComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
 
   value? : number ;

   ProductForm! : FormGroup; 
   
    productcount : number = 0 ;
   
   public InventoryStatus = ['In Stock' , 'Out Of Stock'];
   
   
   constructor( private fbuilder : FormBuilder , private _dataService : ProductDataService){
       this.productcount = this._dataService.productCount ;
   }
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
      productId: ['0']
    })
  }
   
  
  onSubmit(){
   
    this.value = (this._dataService.productCount) + 1;
    this.ProductForm.get('productId')?.setValue(this.value);
   
    this._dataService.setData(this.ProductForm.value);
    console.log('form submitted!',this.ProductForm.value);
  }
}


