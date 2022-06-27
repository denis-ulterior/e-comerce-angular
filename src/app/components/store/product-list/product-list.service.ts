import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http"
import { Product } from "./model/Product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductListService {
    private urlOfService = 'http://localhost:3100/api/products'
    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    getProduct():Observable<Array<Product>>{
        return this.httpClient.get<Array<Product>>(this.urlOfService)
    }
}