import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private cartService: CartService) {}

  @Input() singleBook: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false;

  addToCart() {
    this.isInCart = true;
    this.cartService.addToCart(this.singleBook)
    // this.bookEmitter.emit(this.singleBook)
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.removeBookFromCart(this.singleBook)
  }
}
