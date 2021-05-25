import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagesnotfound]'
})
export class ImagesnotfoundDirective {

  constructor(private elementImage:ElementRef) { }

  //Escucha eventos de nuestros DOM, especificamente de un elemento.
  @HostListener('error')
  onError():void{
    this.elementImage.nativeElement.src = 'https://cima-afrique.org/cima/images/not-available.png'
  }

}
