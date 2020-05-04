import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./interfaces/product-interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  BASE_URL: string = "http://localhost:3000";

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.BASE_URL}/api/product`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.BASE_URL}/api/product/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    console.log(product);

    let json = JSON.stringify(product);
    let params = "json=" + json;
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post<Product>(`${this.BASE_URL}/api/product`, json, {
      headers: headers,
    });
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(
      `${this.BASE_URL}/api/product/${id}`,
      product
    );
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${this.BASE_URL}/api/product/${id}`);
  }
}
