import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrors]'
})
export class ErrorsDirective {

  constructor(el: ElementRef) { 
    console.log(el)
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
