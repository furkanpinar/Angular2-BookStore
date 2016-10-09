import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'bs-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  items: Ingredient[] = [];

}
