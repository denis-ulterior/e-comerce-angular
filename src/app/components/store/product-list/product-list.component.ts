import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CarrinhoService } from '../../shared/services/carrinho.service';
import { Product } from './model/Product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Array<Product>=[]
  constructor(private productService:ProductListService) { }
  filtros: Array<any> = []
  ngOnInit(): void {
    this.productService.getProduct().subscribe(res=>{
      this.products = res
    })

  }
}
