import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'editar/:id', loadChildren: () => import('./editar-paciente/editar-paciente.module').then(m => m.EditarPacienteModule) },
  { path: 'novo', loadChildren: () => import('./novo-paciente/novo-paciente.module').then(m => m.NovoPacienteModule) },
  { path: 'aplicacao-vacina', loadChildren: () => import('./aplicacao-vacina/aplicacao-vacina.module').then(m => m.AplicacaoVacinaModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
