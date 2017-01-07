import { RECIPE_ROUTES } from './recipes/recipes.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from "@angular/router";

//i can't explain why in the previous project this was not necessary, and here i get a cli error
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: RECIPE_ROUTES
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);