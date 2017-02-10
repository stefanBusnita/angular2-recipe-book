import { SharedModule } from './../shared.module';
import { recipesRouting } from './recipes.routing';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        RecipeEditComponent,
        RecipeStartComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipesDetailComponent
    ],
    imports: [ReactiveFormsModule, SharedModule,recipesRouting]
})
export class RecipesModule {}