import {Ingredient} from "../shared/ingredient";
export class Book {
    constructor(public name, public description, public ingredients: Ingredient[]) {}
}
