import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  
  constructor() { }
  ngOnInit(): void {
  }
  share ( link :  any ) { 
    window . open ( `https://t.me/share/url?url= ${ link } &text=Привет, тебе будет интересно,${this.product.name}`)
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
