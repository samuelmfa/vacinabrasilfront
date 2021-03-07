import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { NgxMaskModule, IConfig } from 'ngx-mask';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

const MODULES = [
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  ReactiveValidationModule,
  NgxMaskModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [...MODULES],

})
export class SharedModule { }
