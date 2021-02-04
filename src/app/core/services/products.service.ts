import { Injectable } from '@angular/core';
import { Product } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
   return  [
      {
        id: '1',
        image: 'assets/images/shirt.png',
        title: 'Camiseta',
        price: 80000,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae minus debitis expedita maiores? Esse, voluptatibus dignissimos. Eum impedit ipsa error, porro placeat illo laboriosam, qui blanditiis tempore deleniti cupiditate!'
      },
      {
        id: '2',
        image: 'assets/images/coat.png',
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
  }

  getProduct(id: string): Product {
    return this.getProducts().find(item => item.id === id);
  }
}
