import { Ingredient } from './ingredient';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable,Subscription } from 'rxjs/Rx';

import { Recipe } from "./Recipe";

@Injectable()
export class RecipeService {

 recipesChange = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Fatty', 'Awesome', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('French Fries', 2), new Ingredient('Bacon', 2)]
    ),
    new Recipe('Salad', 'Meh', 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero_pdt_garden_salad.png', [])
  ];
  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }
  getRecipe(recipeIndex: number) {
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-type': 'application/json'
    });
    return this.http.put('https://angular2-recipe-book-92b80.firebaseio.com/recipes.json', body, { headers: headers });


  }

  fetchData() {
    return this.http.get('https://angular2-recipe-book-92b80.firebaseio.com/recipes.json')
    .map((response : Response)=>response.json())
    .subscribe((data : Recipe[]) => {this.recipes = data; this.recipesChange.emit(this.recipes);});
  }

}
