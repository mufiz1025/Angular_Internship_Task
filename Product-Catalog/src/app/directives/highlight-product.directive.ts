import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';

@Directive({
  selector: '[appHighlightProduct]'
})
export class HighlightProductDirective {
 
isInStock = input(true);
el =inject(ElementRef);

styleEffect = effect(()  => {
  if (this.isInStock()){
    this.el.nativeElement.style.textDecoration = 'Line-through';
    this.el.nativeElement.style.backgroundColor ='#d3f938';
    this.el.nativeElement.style.color = '#6c757c';
  } else{
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.backgroundColor ='#fff';
    this.el.nativeElement.style.color = '#000';
  }
})

  constructor() { }

}
