import { Component } from '@angular/core';
import { BookService } from './books/book.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'bs-root',
  templateUrl: './book-store.component.html',
  providers: [BookService, ShoppingListService]
})
export class BookStore {
}
