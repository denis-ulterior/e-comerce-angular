import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from './product-list/model/Product';
import { ProductListService } from './product-list/product-list.service';

@Component({
  selector: 'app-store',
  templateUrl: './store-app.component.html',
  styleUrls: ['./store-app.component.css']
})
export class StoreAppComponent implements OnInit {
  filtros: Array<any> = []
  constructor(public route: Router, private productListService: ProductListService) { }
  private product: Array<Product> = []
  ngOnInit(): void {
  }
  getFilter(valores: any) {
    this.filtros = valores
    this.productListService.updateFiltered(this.filtros).subscribe(res => {
      this.route.navigate(['filtered', valores[0], valores[1]])
    })
    if (!environment.production)
      console.log(this.filtros)
  }

}
