import { NovoPacienteService } from './novo-paciente.service';
import { NovoPacienteComponent } from './novo-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoPacienteRoutingModule } from './novo-paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';

import { HttpConfig } from '../config/http.config';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [NovoPacienteComponent],
  imports: [
    CommonModule,
    NovoPacienteRoutingModule,
    LayoutModule,
    MaterialSharedModule,
    SharedModule
  ],
  providers: [NovoPacienteService, HttpConfig]
})
export class NovoPacienteModule { }
