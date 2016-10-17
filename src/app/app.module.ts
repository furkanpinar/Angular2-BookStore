import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookStore } from './book-store.component';
import { HeaderComponent } from './header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import {AppRouting} from "./app.routing";
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookStartComponent } from './books/book-start.component';

@NgModule({
  declarations: [
    BookStore,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    BookEditComponent,
    BookStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [BookStore]
})
export class AppModule { }
