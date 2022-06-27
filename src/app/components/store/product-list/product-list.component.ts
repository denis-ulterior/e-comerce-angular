import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  ngOnInit(): void {
    this.productService.getProduct().subscribe(retorno =>{
      this.products = retorno
      if(!environment.production)
      console.log(this.products)
    })
  }

}
