import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() valoresEvent = new EventEmitter<Array<any>>();

  private minimo = 0
  private maximo = 0

  constructor(private productService: ProductListService) { }

  ngOnInit(): void {
  }
  fitrarResultado(min: string, max: string) {

    this.minimo = parseInt(min)
    this.maximo = parseInt(max)
    this.maximo < this.minimo ? this.minimo = 0 : null
    this.valoresEvent.emit([this.minimo, this.maximo]);

  }

}
