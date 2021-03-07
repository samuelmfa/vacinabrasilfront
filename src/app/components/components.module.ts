import { ConfirmDilogComponent } from './confirm-dilog/confirm-dilog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [ConfirmDilogComponent, AlertComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    SharedModule
  ]

})
export class ComponentsModule { }
