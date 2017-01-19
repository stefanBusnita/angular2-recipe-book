import { Component,Output, OnInit,OnChanges,Input,EventEmitter } from '@angular/core';
import {Ingredient} from './../recipes/ingredient';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
 @Input() item : Ingredient;
 @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changeRecord) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    if(changeRecord.item.currentValue === null){
       this.isAdd = true;
       this.item = {name : null, amount : null};
    }else{
       this.isAdd = false;
    }
  }

  onSubmit(ingredient : Ingredient){
    const newIngredient : Ingredient = new Ingredient(ingredient.name,ingredient.amount);
 if(!this.isAdd){
   this.sls.editItem(this.item,newIngredient);
   this.onClear();
 }else{
   console.log(ingredient.name,ingredient.amount);
   this.item = newIngredient;
   this.sls.addItem(this.item);
 }
  }

  onDeleteItem(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
