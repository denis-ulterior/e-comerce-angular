import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../store/product-list/model/Product';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  localData = JSON.parse(localStorage.getItem('carrinhoEComerce') as string) as Array<Product>
  private carrinho: Carrinho = { id: null, produtos: [] }
  constructor() {
    if(this.localData)
    this.carrinho.produtos = this.localData as Array<Product>
    if (!environment.production)
      console.log('dadosLocais', this.localData)
  }

  addProduct(product: Product) {
    product.inCart=true
    let res = this.carrinho.produtos?.push(product)
    localStorage.setItem('carrinhoEComerce', JSON.stringify(this.carrinho.produtos))
    if (!environment.production) {
      console.log('Adicionado novo item, total de items: ', res)
    }
  }
  removeProduct(product:Product){
    if(!environment.production)
    console.log('remove chamado-> ',product)
    
    let retorno = this.carrinho.produtos?.filter(prod => prod.id != product.id)
    this.carrinho.produtos = retorno as Array<Product>
    localStorage.setItem('carrinhoEComerce', JSON.stringify(this.carrinho.produtos))
    if(!environment.production)
    console.log('carrinho atualizado-> ',retorno )

  }
  getProducts(): Observable<Product[]> {
    const prodsInCart = new BehaviorSubject(this.carrinho.produtos as Array<Product>)
    return prodsInCart
  }
  getCarrinho() {
    return this.carrinho
  }
  ngOnUpdate(){

  }
}
