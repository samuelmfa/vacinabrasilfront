import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HUB_URL } from '../config/hub-url';
import { HttpConfig } from '../config/http.config';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';
import { Vacina } from '../models/vacina.model';

@Injectable()
export class AplicacaoVacinaService {

  constructor(private http: HttpClient, private headers: HttpConfig) { }

  public buscarPaciente(id: number): Observable<any> {
    return this.http.get<Paciente>(`${HUB_URL.apiDev}/usuarios/${id}`, this.headers.getHttpHeaders());
  }

  public buscarPorCpfPaciente(cpf: string): Observable<any> {
    return this.http.get<Paciente>(`${HUB_URL.apiDev}/usuarios/cpf/${cpf}`, this.headers.getHttpHeaders());
  }

  public buscarVacinaPorPaciente(id: number): Observable<any> {
    return this.http.get<Array<Vacina>>(`${HUB_URL.apiDev}/vacinas/usuario/${id}`, this.headers.getHttpHeaders());
  }

  public salvarVacinacao(vacinacao: Vacina): Observable<any> {
    return this.http.post<Paciente>(`${HUB_URL.apiDev}/vacinas`, vacinacao, this.headers.getHttpHeaders());
  }

  public excluirVacinaDoPaciente(id: number): Observable<any> {
    return this.http.delete(`${HUB_URL.apiDev}/vacinas/${id}`, this.headers.getHttpHeaders());
  }

}
