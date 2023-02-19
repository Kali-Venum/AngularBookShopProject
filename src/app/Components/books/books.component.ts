import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  books: Book[] = [];

  cart: Book[] = [];

  addToCart(event: Book) {
    console.log(event)
  }
}
