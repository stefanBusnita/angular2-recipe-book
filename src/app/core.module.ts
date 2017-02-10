import { HomeComponent } from './home.component';
import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [DropdownDirective, HomeComponent],
    exports: [DropdownDirective]
})
export class CoreModule { }