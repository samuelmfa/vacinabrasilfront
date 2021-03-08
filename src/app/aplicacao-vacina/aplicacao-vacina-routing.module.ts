import { AplicacaoVacinaComponent } from './aplicacao-vacina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: AplicacaoVacinaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacaoVacinaRoutingModule { }
