import { Directive, ElementRef, input, effect, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    
  productStatus = input(false);
 
   styleEffect = effect(() => {
    if(this.productStatus()){
    this.el.nativeElement.style.backgroundColor ='yellow';
    }
   })
  constructor(private el: ElementRef ) {
   }
}
