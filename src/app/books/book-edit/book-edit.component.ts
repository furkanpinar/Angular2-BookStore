import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Subscription} from "rxjs";
import {Book} from "../book";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit, OnDestroy {
  bookForm: FormGroup;
  private bookIndex: number;
  private book: Book;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.bookIndex = +params['id'];
          this.book = this.bookService.getBook(this.bookIndex);
        } else {
          this.isNew = true;
          this.book = null;
        }
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.bookForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    );
  }

  onRemoveItem(index : number) {
    (<FormArray>this.bookForm.controls['ingredients']).removeAt(index);
  }

  onSubmit(){
    const newBook = this.bookForm.value;
    if(this.isNew) {
      this.bookService.addBook(newBook);
    } else {
      this.bookService.editBook(this.book, newBook);
    }
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let bookName = '';
    let bookImageUrl = '';
    let bookContent = '';
    let bookIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.book.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.book.ingredients.length; i++) {
          bookIngredients.push(
            new FormGroup({
              name: new FormControl(this.book.ingredients[i].name, Validators.required),
              amount: new FormControl(this.book.ingredients[i].amount, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          );
        }
      }
      bookName = this.book.name;
      bookImageUrl = this.book.imagePath;
      bookContent = this.book.description;
    }
    this.bookForm = this.formBuilder.group({
      name: [bookName, Validators.required],
      imagePath: [bookImageUrl, Validators.required],
      description: [bookContent, Validators.required],
      ingredients: bookIngredients
    });
  }

}
