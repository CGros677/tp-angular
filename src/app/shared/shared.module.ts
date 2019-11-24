import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {NbButtonModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {FormComponent} from './form/form.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatchPasswordsValidatorDirective} from './match-passwords-validator.directive';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [MenuComponent, FormComponent, MatchPasswordsValidatorDirective],
  imports: [
    CommonModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
   TranslateModule.forChild(),
   MatSelectModule,
   MatInputModule
  ],
  exports: [MenuComponent, FormComponent]
})
export class SharedModule {
}
