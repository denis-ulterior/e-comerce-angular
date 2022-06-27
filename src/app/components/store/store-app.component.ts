import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store',
  templateUrl: './store-app.component.html',
  styleUrls: ['./store-app.component.css']
})
export class StoreAppComponent implements OnInit {
  filtros:Array<any>=[]
  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  getFilter(valores:any){
    this.filtros = valores
    if(!environment.production)
    console.log(this.filtros)
  }
}
