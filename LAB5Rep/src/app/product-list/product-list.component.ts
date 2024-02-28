import { Component } from '@angular/core';
import { products } from '../shared/products';
import { SenderService } from '../services/sender.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  categId = -1;
  change = 'dfs';
  constructor(private service: SenderService){
    this.categId = service.ProdCategory;
  }
  getCategory(){
    this.products = this.service.getProds();
    this.change = "sdsdfsdfsdf";
  }

  deleteProd(id: number){
    console.log(id);
    this.products.forEach((element,index)=>{
      if(element.id==id+1) this.products.splice(index, 1);
   });
  }
}
