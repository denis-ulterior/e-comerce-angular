import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../store/product-list/model/Product';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn:'root'
})
export class CarrinhoService {
  private carrinho:Carrinho={id:null,produtos:[]}
  constructor() { }

  addProduct(product:Product){
    let res = this.carrinho.produtos?.push(product)
    if(!environment.production){
      console.log('Adicionado novo item, total de items: ',res)
    }
  }
  getProducts():Array<Product>{
    return this.carrinho.produtos as Array<Product>
  }
  getCarrinho(){
    return this.carrinho
  }
}
