import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../model/product-entity';
import { ProductDataService } from '../../services/product-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detials',
  imports: [RouterOutlet, FormsModule , CommonModule, RouterLink],
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.scss'
})
export class ProductDetialsComponent implements OnInit {

   instock =  true;
   public productid? : number ;
  serverData : Product[] = [];
 constructor(private _dataservice : ProductDataService, private route:ActivatedRoute){
  this.serverData = this._dataservice.getData();
 }
 ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('productId')!);
    this.productid = id ;
 }
 

}
