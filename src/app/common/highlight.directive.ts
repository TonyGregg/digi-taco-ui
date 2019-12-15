import { Directive, ElementRef } from '@angular/core';
/**
 * It is an attribute directive - changes the appearance or behavior of a DOM element
 * There are three kinds of directives in Angular:
* 1. Components—directives with a template.
  2. Structural directives—change the DOM layout by adding and removing DOM elements, e.g. *ngFor or *ngIf
  3. Attribute directives—change the appearance or behavior of an element, component, or another directive.
 */

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
