import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipe-start.component';
import { Routes } from '@angular/router';
export const RECIPE_ROUTES: Routes = [{
    path: '', component: RecipeStartComponent
}, {
    path: 'new', component: RecipeEditComponent
}, {
    path: ':id', component: RecipesDetailComponent
}, {
    path: ':id/edit', component: RecipeEditComponent
}]