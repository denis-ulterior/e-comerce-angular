import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/Product';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-offert-list',
  templateUrl: './offert-list.component.html',
  styleUrls: ['./offert-list.component.css']
})
export class OffertListComponent implements OnInit {
  products:Array<Product>=[]
  constructor(private productService:ProductListService) { }

  ngOnInit(): void {
    this.productService.getProductOffers().subscribe(retorno=>{
      this.products = retorno
      if(!environment.production)
      console.log(this.products)
    })
  }

}
