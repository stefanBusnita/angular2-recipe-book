import { Recipe } from './../recipe';
import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [];

  //old way in which we used to send the selected recipe to another component
  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe : Recipe){
    // console.log(recipe);
    // this.recipeSelected.emit(recipe);
  }

}
