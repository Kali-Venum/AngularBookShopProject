import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

// Component.
import { AppComponent } from "./app.component";
import { BooksComponent } from './Components/books/books.component';
import { BookComponent } from './Components/book/book.component';

@NgModule({
    declarations: [AppComponent, BooksComponent, BookComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}