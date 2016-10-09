import { Component } from '@angular/core';
import {Book} from "./book";

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  selectedBook : Book;
}
