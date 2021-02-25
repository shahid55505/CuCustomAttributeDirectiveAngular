import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private ele: ElementRef) { 
    ele.nativeElement.style.color="green";
  }

}
