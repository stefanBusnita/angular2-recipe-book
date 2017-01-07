import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipes-detail',
  templateUrl: './recipes-detail.component.html'
})
export class RecipesDetailComponent implements OnInit,OnDestroy {

  private subscription : Subscription;
  private recipeIndex : number;

  @Input() selectedRecipe: Recipe;

  constructor(private sls : ShoppingListService, private route : ActivatedRoute, private recipesService : RecipeService, private router : Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params : any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    )
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  onEditRecipe(){
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDeleteRecipe(recipe : Recipe){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
