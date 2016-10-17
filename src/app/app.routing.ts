import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from "./books/books.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { BookStartComponent } from "./books/book-start.component";
import { BookEditComponent } from "./books/book-edit/book-edit.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent, children: [
    { path: '', component: BookStartComponent },
    { path: 'new', component: BookEditComponent },
    { path: ':id', component: BookDetailComponent },
    { path: ':id/edit', component: BookEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
