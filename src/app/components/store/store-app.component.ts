import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store-app.component.html',
  styleUrls: ['./store-app.component.css']
})
export class StoreAppComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

}
