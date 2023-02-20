import { Injectable } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Array<Book> = [];

  addToCart(book: Book) {
    this.cart.push(book);
  }

  getAllCartData() {
    return this.cart;
  }

  removeBookFromCart(book: Book) {
    this.cart = this.cart.filter(data => data !== book);
  }
}
