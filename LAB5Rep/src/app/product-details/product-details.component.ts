import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../shared/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  // ngOnInit(): void {
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productIdFromRoute = Number(routeParams.get('productId'));
  //   this.product = products.find(product => product.id === productIdFromRoute);
  // }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product with the specified ID
    this.product = products.find(product => product.id === productIdFromRoute);

    // Handle the case when the product is not found
    if (!this.product) {
      console.error(`Product with ID ${productIdFromRoute} not found.`);
      // You can also navigate to a 404 page or any other appropriate action.
    }
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
