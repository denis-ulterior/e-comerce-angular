import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Product } from "./model/Product";
import { environment } from './../../../../environments/environment';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
@Injectable({
    providedIn: 'root'
})
export class ProductListService {
    private urlOfService = environment.apiUrl
    products: Array<Product> = []

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    getProduct(): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(this.urlOfService + '/products')
    }
    getProductOffers(): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(this.urlOfService + '/offers')
    }
    updateFiltered(filtro: Array<any>): Observable<Array<Product>> {
        console.log('Filtro recebido em service: ', filtro)
        return this.httpClient.get<Array<Product>>(this.urlOfService + '/products/filter/' + filtro[0] + '/' + filtro[1])
    }

}