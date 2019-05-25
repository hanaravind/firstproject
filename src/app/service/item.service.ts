import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  productData: any;
  constructor() { 
    this.productData = JSON.parse(localStorage.getItem('ProductData'));
  }
  setProduct(data) {
    this.productData = data;
    localStorage.setItem('ProductData',JSON.stringify(data));
  }
  
  getProduct() {
    return this.productData;
  }
}
