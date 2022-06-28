import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/Product';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css']
})
export class FilteredListComponent implements OnInit {
  private min = 0
  private max = 10000000000000
  constructor(private route: Router, private productService: ProductListService) {
    route.events.pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent)).subscribe(
      (e: RouterEvent) => {
        let params = e.url.split('/')
        let maxTmp = params.pop() as string

        this.max = parseInt(maxTmp)
        let minTmp = params.pop() as string
        this.min = parseInt(minTmp)
        if (!environment.production)
          console.log('Filtro processado na rota: ',this.min, this.max)
        this.updateList()
      });
  }

  products: Array<Product> = []
  ngOnInit(): void {

  }
  updateList(): void {
    this.productService.updateFiltered([this.min, this.max]).subscribe(res => {
      this.products = res
    })
  }

}
