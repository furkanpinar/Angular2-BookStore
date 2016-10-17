import {Component, Input} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'bs-book-item',
  templateUrl: './book-item.component.html'
})
export class BookItemComponent {
  @Input() book: Book;
  @Input() bookId : number;

}
