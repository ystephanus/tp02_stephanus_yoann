import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrors]'
})
export class ErrorsDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
