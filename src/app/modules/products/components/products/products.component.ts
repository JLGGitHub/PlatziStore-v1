import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/entities/product.model';
import { ProductsService } from '../../../../core/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = []; 

  constructor(private productsServices: ProductsService) { 
    this.products = productsServices.getProducts(); 
  }

  ngOnInit(): void {
  }

  AddProduct(event) {
    console.log(event)
  }
}
