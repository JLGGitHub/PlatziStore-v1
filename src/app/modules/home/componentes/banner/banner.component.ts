import { AfterViewInit, Component, OnInit } from '@angular/core';

import Swiper from 'swiper'; 
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;
  images: string[] = [
    'assets/banner/banner1.png',
    'assets/banner/banner2.jpg',
    'assets/banner/banner4.jpg',
  ]
  constructor() { }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container')
  }

  ngOnInit(): void {
  }

}
