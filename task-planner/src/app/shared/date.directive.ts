import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor(private element: ElementRef) { }

  /**
   * При наборе в инпуты с датой введенные буквы и символы, кроме / заменяются пустым символом.
   */
  @HostListener('input') checkDate() {
    this.element.nativeElement.value = this.element.nativeElement.value.replace(/[^/0-9]+/g, '');
  }
}
