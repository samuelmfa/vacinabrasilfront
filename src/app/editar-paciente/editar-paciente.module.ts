import { EditarPacienteComponent } from './editar-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPacienteRoutingModule } from './editar-paciente-routing.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { SharedModule } from '../shared/shared.module';
import { EditarpacienteService } from './editarpaciente.service';
import { HttpConfig } from '../config/http.config';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [EditarPacienteComponent],
  imports: [
    CommonModule,
    EditarPacienteRoutingModule,
    LayoutModule,
    MaterialSharedModule,
    SharedModule
  ],
  providers: [
    EditarpacienteService,
    HttpConfig,
  ]
})
export class EditarPacienteModule { }
