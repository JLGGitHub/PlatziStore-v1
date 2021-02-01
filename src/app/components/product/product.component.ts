import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// IMPORTACIONES PROPIAS DE LA APP.
import { Product } from 'src/app/product.model';

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



}
