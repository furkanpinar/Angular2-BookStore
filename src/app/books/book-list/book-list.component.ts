import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../book";

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  books: Book[] = [
    new Book("In Search of Lost Time", "In Search of Lost Time by Marcel Proust", []),
    new Book("Ulysses", "Ulysses by James Joyce", []),
    new Book("Don Quixote", "Don Quixote by Miguel de Cervantes", []),
    new Book("Moby Dick", "Moby Dick by Herman Melville", []),
    new Book("Hamlet", "Hamlet by William Shakespeare", []),
    new Book("War and Peace", "War and Peace by Leo Tolstoy", []),
    new Book("The Odyssey", "The Odyssey by Homer", []),
    new Book("The Great Gatsby", "The Great Gatsby by F. Scott Fitzgerald", []),
    new Book("The Divine Comedy", "The Divine Comedy by Dante Alighieri", []),
    new Book("Madame Bovary", "Madame Bovary by Gustave Flaubert", []),
    new Book("The Brothers Karamazov", "The Brothers Karamazov by Fyodor Dostoyevsky", [])
  ];
  @Output() bookSelected = new EventEmitter<Book>();
  book = new Book("Happy Days", "Happy Days Book", []);

  onSelected(book: Book) {
    this.bookSelected.emit(book);
  }
}
