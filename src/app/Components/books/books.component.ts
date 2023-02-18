import { Component } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      image: 'https://m.media-amazon.com/images/I/51Do0NLYmDL._SX258_BO1,204,203,200_.jpg',
      name: "World's Greatest Books For Personal Growth & Wealth",
      author: 'Dale Carnegie',
      price: 100
    },
    {
      image: 'https://m.media-amazon.com/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg',
      name: "Energize Your Mind",
      author: 'Gaur Gopal Das',
      price: 200
    },
  ];

  cart: Book[] = [];

  addToCart(event: Book) {
    console.log(event)
  }
}
