import { Ingredient } from './ingredient';
import { Injectable } from '@angular/core';
import { Recipe } from "./Recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Fatty', 'Awesome', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('French Fries', 2), new Ingredient('Bacon', 2)]
    ),
    new Recipe('Salad', 'Meh', 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero_pdt_garden_salad.png', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
