import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.focus();
  }
}
