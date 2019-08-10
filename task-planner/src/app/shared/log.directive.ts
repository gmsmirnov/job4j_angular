import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  /**
   * При потере фокуса с input'а в консоль выводится содержимое данного input'а.
   */
  @HostListener('blur') logging() {
    console.log(this.element.nativeElement.value);
  }
}
