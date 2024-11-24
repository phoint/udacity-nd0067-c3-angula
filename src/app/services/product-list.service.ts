import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInterface } from '../components/product-list/product-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  http = inject(HttpClient)
  private _dataSubject = new BehaviorSubject<ProductInterface[]>([]);
  data$ = this._dataSubject.asObservable();

  constructor() {
    this.getProductList();
  }



  getProductList() {
    this.http.get<ProductInterface[]>("http://localhost:3000/products").subscribe({
      next: (data) => this._dataSubject.next(data),
      error: (err) => console.error("HTTP error: ", err)
    })
  }

  getProductById(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`http://localhost:3000/products/${id}`)
  }
}
