import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  /**
   * Рамка input'а становится зеленой при наведении на него курсора мыши.
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', 'green');
  }

  /**
   * Рамка input'а становится синей при наборе текста.
   */
  @HostListener('input') onInput() {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', 'blue');
  }

  /**
   * Рамка input'а становится прозрачной потере фокуса (перешли от ввода данных в этот input).
   */
  @HostListener('blur') outFocus() {
    this.renderer.removeStyle(this.element.nativeElement, 'border-color');
  }

  /**
   * Рамка input'а становится прозрачной при отведении от него курсора мыши.
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'border-color');
  }
}
