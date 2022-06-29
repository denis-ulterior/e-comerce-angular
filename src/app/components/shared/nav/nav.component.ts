import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itensCarrinho = 0
  constructor(private carrinho: CarrinhoService) { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    this.getQtdItemsCarrinho()
  }
  getQtdItemsCarrinho() {
    this.itensCarrinho = this.carrinho.getCarrinho().produtos?.length as number
  }

}
