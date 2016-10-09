import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  books: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();
  book = new Book("Happy Days", "Happy Days Book");

  onSelected(book: Book) {
    this.bookSelected.emit(book);
  }
}
