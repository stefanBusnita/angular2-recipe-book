import { RecipesComponent } from './recipes.component';
import { RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipe-start.component';
import { Routes } from '@angular/router';
//i can't explain why in the previous project this was not necessary, and here i get a cli error
import { ModuleWithProviders } from '@angular/core';
const RECIPE_ROUTES: Routes = [{
    path: '', component: RecipesComponent, children: [
        {
            path: '', component: RecipeStartComponent
        }, {
            path: 'new', component: RecipeEditComponent
        }, {
            path: ':id', component: RecipesDetailComponent
        }, {
            path: ':id/edit', component: RecipeEditComponent
        }
    ]
}];

export const recipesRouting = RouterModule.forChild(RECIPE_ROUTES);