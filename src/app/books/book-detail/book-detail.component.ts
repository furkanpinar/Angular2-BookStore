import {Component, Input} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
  @Input() selectedBook: Book;
}
