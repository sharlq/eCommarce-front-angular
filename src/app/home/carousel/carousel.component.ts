import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'https://c.wallhere.com/photos/df/78/sky_ship_Hamburg_Germany_container_ship_vehicle_lights-1949777.jpg!d',
    'https://intsights.com/writable/images/_openGraphImage/payment_OG.png',
    'https://c8.alamy.com/zooms/9/3ed88f6ca4f9402db94f8e22de3ea31c/amdyp6.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
