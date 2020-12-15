import { Component, Input, OnInit } from '@angular/core';
import{ GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-tag-menu',
  templateUrl: './tag-menu.component.html',
  styleUrls: ['./tag-menu.component.scss'],
})

export class TagMenuComponent implements OnInit {
  shop:any = GlobalConstants.shopArray.items;
  mountArray = GlobalConstants.shopArray.mount;
  
  @Input() name: String='';
  @Input() mount: String="0";
  @Input() image: String =
    'https://img.freepik.com/foto-gratis/concepto-cocina-india-alitas-pollo-al-horno-patas-salsa-mostaza-miel-sirviendo-platos-restaurante-plato-negro-especias-indias-mesa-madera-imagen-fondo_127425-18.jpg?size=626&ext=jpg';
  @Input() ingredientes?: Array<String>;
  openTag: boolean = false;


  constructor() {}

  ngOnInit(): void {}
  addShop():void{
    if(!GlobalConstants.shopArray.checkState){

      
      var isArray = false;
      const newObject = {image:this.image,name:this.name,mount:this.mount,count:1}
      if(this.shop.length < 1){
        this.shop.push(newObject)
      }
    else{
      for (const e of this.shop) {
        if(e.name == this.name ){
      e.count = e.count + 1;
      isArray= true
    }
  
  }
     if(isArray==false){
       this.shop.push(newObject)
      }
    }
    for(const e of this.shop){
      this.mountArray = GlobalConstants.shopArray.mount + (parseInt(e.mount) * e.count)
    }
    
    GlobalConstants.shopArray.mount = this.mountArray
    GlobalConstants.shopArray.items = this.shop
    
  }
}
}
