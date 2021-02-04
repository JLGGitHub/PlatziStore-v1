import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/entities/product.model';

// IMPORTACIONES PROPIAS DE LA APP.


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // ENTRADAS Y SALIDAS (EVENTOS)
  @Input() product: Product 
  @Output() addCart: EventEmitter<string> =  new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo para agregar al carro
  AddCart() {
    this.addCart.emit('El id del producto es: ' + this.product.id);
  }

  DetailProduct() {
    console.log(this.product.id);
  }


}
