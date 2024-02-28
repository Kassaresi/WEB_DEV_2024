import { Injectable } from '@angular/core';
import { products, Product } from '../shared/products';
import { Tag } from '../shared/tags';


@Injectable({
  providedIn: 'root'
})
export class SenderService {

  prods = [] = products; 
  public ProdCategory: number = -1;

  selectCateg(id: number){
    let products = this.prods.filter(el=>el.category==id+1); 
    console.log(products);
    this.ProdCategory = id;
  }

  getProds(){
    return this.prods;
  }
  
  constructor() { 
    this.ProdCategory = -1;
  }

  getAllTags(): Tag[]{
    return [
      {name: "All"},
      {name: "Apple"},
      {name: "Samsung"},
      {name: "Xiaomi"},
      {name: "Huawei"}
    ];
  }

  getAllByTag(tag: string): Product[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(products => products['tags']?.includes(tag));
  }



  getAll(): Product[] {
      return products;
  }
}
