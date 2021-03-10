import { AplicacaoVacinaModelComponent } from './aplicacao-vacina-model/aplicacao-vacina-model.component';
import { AplicacaoVacinaComponent } from './aplicacao-vacina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aplicacao', component: AplicacaoVacinaModelComponent,
    children: [
      { path: '', component: AplicacaoVacinaComponent },
      { path: ':cpf', component: AplicacaoVacinaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacaoVacinaRoutingModule { }
