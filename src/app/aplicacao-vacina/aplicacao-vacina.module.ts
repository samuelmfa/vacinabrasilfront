import { HttpConfig } from './../config/http.config';
import { AplicacaoVacinaService } from './aplicacao-vacina.service';
import { AplicacaoVacinaComponent } from './aplicacao-vacina.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacaoVacinaRoutingModule } from './aplicacao-vacina-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [AplicacaoVacinaComponent],
  imports: [
    CommonModule,
    AplicacaoVacinaRoutingModule,
    LayoutModule,
    MaterialSharedModule,
    SharedModule,
  ], providers: [AplicacaoVacinaService, HttpConfig]
})
export class AplicacaoVacinaModule { }
