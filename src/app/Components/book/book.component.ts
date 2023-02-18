import { Component, Input } from '@angular/core';
import { Book } from 'src/app/Models/Book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() singleBook: Book = {} as Book;
}
