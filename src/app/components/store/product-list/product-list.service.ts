import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "./model/Product";
import { Observable } from "rxjs";
import { environment } from './../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})

export class ProductListService {
    private urlOfService = environment.apiUrl
    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    getProduct():Observable<Array<Product>>{
        return this.httpClient.get<Array<Product>>(this.urlOfService+'/products')
    }
    getProductOffers():Observable<Array<Product>>{
        return this.httpClient.get<Array<Product>>(this.urlOfService+'/offers')
    }
}