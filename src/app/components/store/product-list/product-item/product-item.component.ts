import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public showModal:boolean = false
  @Input()
  produto!:Product
  constructor() { }

  ngOnInit(): void {
  }
  public show():void {
    this.showModal = true; // Show-Hide Modal Check
  
    console.log('Mostrar modal desc: ',this.showModal)
  }
  //Bootstrap Modal Close event
  public hide():void {
    this.showModal = false;
  }

}
