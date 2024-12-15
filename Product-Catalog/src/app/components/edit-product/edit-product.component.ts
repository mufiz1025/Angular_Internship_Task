import { CommonModule } from '@angular/common';
import { Component ,Input, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';
import { Product } from '../../model/product-entity';


@Component({
  selector: 'app-edit-product',
  imports: [ CommonModule, FormsModule ,RouterOutlet , RouterLink,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
public InventoryStatus = ['In Stock' , 'Out Of Stock'];
  constructor(private _dataservice: ProductDataService)  {} 

   @Input() editProductForm! :FormGroup ;
   serverEditData! : Product;

   get productName(){
    return this.editProductForm.get('productName');
   }
   get productPrice(){
       return this.editProductForm.get('productPrice');
   }

ngOnInit(): void {
  this._dataservice.setData(this.serverEditData);
}
}