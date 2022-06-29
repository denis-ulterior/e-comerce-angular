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
  constructor(private productService: ProductListService) { }
  products: Array<Product> = []
  ngOnInit(): void {
    this.productService.getProductOffers().subscribe(res => {
      this.products = res
    })
    if (!environment.production)
      console.log(this.products)
  }
}
