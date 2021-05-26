import { Component, OnInit, AfterViewInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerImages: string[] = [
    'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-1.jpg',
    'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-2.jpg',
    'https://static.platzi.com/media/tmp/class-files/github/platzi-store/platzi-store-17-home/src/assets/images/banner-3.jpg',
  ];


  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Un hook de ciclo de vida que se llama
    // después de que Angular haya inicializado completamente la vista de un componente.
    // Defina un método ngAfterViewInit () para manejar cualquier tarea de inicialización adicional.
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
