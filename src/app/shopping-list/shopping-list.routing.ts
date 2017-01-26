import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
//i can't explain why in the previous project this was not necessary, and here i get a cli error
import { ModuleWithProviders } from '@angular/core';
const SHOPPING_LIST_ROUTES: Routes = [
    { path: '', component: ShoppingListComponent }
];

export const shoppingListRoutes = RouterModule.forChild(SHOPPING_LIST_ROUTES);