import { SharedModule } from './../shared.module';
import { shoppingListRoutes } from './shopping-list.routing';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

import { NgModule } from '@angular/core';

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports : [FormsModule, SharedModule, shoppingListRoutes] 
    //imports do not travel down the chain like providers, therefore we must add BrowserModule, BUUUUT
    // BrowserModule can only be added in one module, for any other child module we must user CommonModule 
    //added a shared module which exports CommonModule this can be done to avoid writing same module in others who share that certain module.
})
export class ShoppingListModule{}