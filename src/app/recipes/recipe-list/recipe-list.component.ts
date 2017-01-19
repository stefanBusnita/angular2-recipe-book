import { Recipe } from './../recipe';
import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [];

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
