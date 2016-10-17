import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookStartComponent} from "./book-start.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookEditComponent} from "./book-edit/book-edit.component";

const books_routes: Routes = [
  { path: '', component: BookStartComponent },
  { path: 'new', component: BookEditComponent },
  { path: ':id', component: BookDetailComponent },
  { path: ':id/edit', component: BookEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(books_routes) ],
  exports: [ RouterModule ]
})
export class BooksRouting {}
