import { shoppingListRoutes } from './shopping-list.routing';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports : [FormsModule, CommonModule, shoppingListRoutes] 
    //imports do not travel down the chain like providers, therefore we must add BrowserModule, BUUUUT
    // BrowserModule can only be added in one module, for any other child module we must user CommonModule 
})
export class ShoppingListModule{}