import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platziStore-v1';

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
    },
  ];

  AddProduct(event) {
    console.log(event)
  }
}
