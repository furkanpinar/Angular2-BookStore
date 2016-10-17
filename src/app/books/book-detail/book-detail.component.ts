import {Component, OnInit, OnDestroy} from '@angular/core';
import { Book } from "../book";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs";
import {BookService} from "../book.service";

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private bookId: number;
  selectedBook: Book;

  constructor(private shoppingListService : ShoppingListService,
              private route: ActivatedRoute,
              private booksServices: BookService,
              private router: Router) {

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.bookId = params['id'];
        this.selectedBook = this.booksServices.getBook(this.bookId);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedBook.ingredients);
  }

  onEdit() {
    this.router.navigateByUrl('/books/' + this.bookId + '/edit');
    //this.router.navigate(['/books'], this.bookId + 'edit');
  }

  onDelete() {
    this.booksServices.deleteBook(this.selectedBook);
    this.router.navigate(['/books']);
  }
}
