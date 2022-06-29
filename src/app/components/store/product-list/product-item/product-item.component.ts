import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarrinhoService } from 'src/app/components/shared/services/carrinho.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public showModal: boolean = false
  @Input()
  produto!: Product

  constructor(private carrinho: CarrinhoService) { }

  ngOnInit(): void {
  }
  public show(): void {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  public hide(): void {
    this.showModal = false;
  }
  addProduct() {
    this.carrinho.addProduct(this.produto)
  }

}
