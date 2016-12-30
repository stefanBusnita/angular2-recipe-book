import { Ingredient } from './../recipes/ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private items : Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items : Ingredient[]){
    //could be used with a for loop and push all items to array
    //this way we apply the push for every item in items, pushing them to this.items
    Array.prototype.push.apply(this.items,items);
  }

}
