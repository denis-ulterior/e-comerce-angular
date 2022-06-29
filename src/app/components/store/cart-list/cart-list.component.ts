import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../shared/services/carrinho.service';
import { Product } from '../product-list/model/Product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: Array<Product> = []
  constructor(private carrinho: CarrinhoService) {
    this.carrinho.getProducts().subscribe(res => {
      this.products = res
    })
  }

  ngOnInit(): void {

  }
  ngOnUpdate() {

  }
  
  ngDoCheck(){
    this.carrinho.getProducts().subscribe(res => {
      this.products = res
    })
  }

}
