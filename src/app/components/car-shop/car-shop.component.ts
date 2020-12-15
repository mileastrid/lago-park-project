import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.scss'],
})
export class CarShopComponent implements OnInit {
  shop: any = GlobalConstants.shopArray;
  mountArray = GlobalConstants.mountArray;
  constructor() {}

  ngOnInit(): void {
    
  }
}
