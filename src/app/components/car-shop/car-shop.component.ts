import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.scss'],
})
export class CarShopComponent implements OnInit {
  shop: any = GlobalConstants.shopArray;
  client = 0;
  checkNumber=0;
  constructor() {}

  ngOnInit(): void {
 
  }

  check(): void {
    GlobalConstants.shopArray.checkState = true;
    this.checkNumber = Math.floor((Math.random() * 9000000) + 1000000);
    this.client = Math.floor((Math.random() * 100) + 1);
  }
}
