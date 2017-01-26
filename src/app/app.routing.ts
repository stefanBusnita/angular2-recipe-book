import { HomeComponent } from './home.component';
import { Routes, RouterModule } from "@angular/router";

//i can't explain why in the previous project this was not necessary, and here i get a cli error
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path: 'recipes',
        loadChildren: 'app/recipes/recipes.module#RecipesModule'
    },
    {
        path: 'shopping-list',
        loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);