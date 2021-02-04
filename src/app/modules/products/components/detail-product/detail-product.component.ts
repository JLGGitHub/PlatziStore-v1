import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../../core/entities/product.model';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  idParameter: string = ""; 
  product: Product; 
  constructor(private route : ActivatedRoute, 
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idParameter = params.id; 
      this.product = this.productsService.getProduct(this.idParameter); 
    });
  }

}
