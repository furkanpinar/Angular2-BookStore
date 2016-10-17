import { Injectable } from '@angular/core';
import { Book } from './book';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class BookService {

  private books:Book[] = [
    new Book("In Search of Lost Time", "In Search of Lost Time by Marcel Proust", "https://www.penguin.co.uk/content/dam/catalogue/pim/editions/190/9780141180311/cover.jpg.rendition.460.707.png", [
      new Ingredient("French Fries", 1),
      new Ingredient("Pork Meat", 2)
    ]),
    new Book("Ulysses", "Ulysses by James Joyce", "https://images-na.ssl-images-amazon.com/images/I/513l61qOeQL._SX319_BO1,204,203,200_.jpg", []),
    new Book("Don Quixote", "Don Quixote by Miguel de Cervantes", "https://www.penguin.co.uk/content/dam/catalogue/pim/editions/190/9780141180311/cover.jpg.rendition.460.707.png", []),
    new Book("Moby Dick", "Moby Dick by Herman Melville", "https://s-media-cache-ak0.pinimg.com/originals/72/92/65/729265b4fa0a280ec2d26e8520812657.jpg", []),
    new Book("Hamlet", "Hamlet by William Shakespeare", "http://www.cineclub.de/images/1997/06/william-shakespeares-hamlet-p.jpg", []),
    new Book("War and Peace", "War and Peace by Leo Tolstoy", "http://www.umershafqat.com/wp-content/uploads/2011/04/War-and-Peace-book.jpg", []),
    new Book("The Odyssey", "The Odyssey by Homer", "http://press.princeton.edu/images/k6936.gif", []),
    new Book("The Great Gatsby", "The Great Gatsby by F. Scott Fitzgerald", "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg", []),
    new Book("The Divine Comedy", "The Divine Comedy by Dante Alighieri", "http://www.loyalbooks.com/image/detail/Divine-Comedy-Dante-Alighieri.jpg", []),
    new Book("Madame Bovary", "Madame Bovary by Gustave Flaubert", "http://ecx.images-amazon.com/images/I/515JL42NLCL._SX329_BO1,204,203,200_.jpg", []),
    new Book("The Brothers Karamazov", "The Brothers Karamazov by Fyodor Dostoyevsky", "http://www.loyalbooks.com/image/detail/Brothers-Karamazov.jpg", [])
  ];

  constructor() {
  }

  getBooks() {
    return this.books;
  }

  getBook(id : number) {
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  editBook(oldBook : Book, newBook : Book) {
    this.books[this.books.indexOf(oldBook)] = newBook;
  }

}
