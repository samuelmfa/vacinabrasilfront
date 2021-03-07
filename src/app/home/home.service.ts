import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HUB_URL } from '../config/hub-url';
import { HttpConfig } from '../config/http.config';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient, private headers: HttpConfig) { }

  public buscarTodosPacientes(): Observable<any> {
    return this.http.get<Array<Paciente>>(`${HUB_URL.apiDev}/usuarios`, this.headers.getHttpHeaders());
  }

  public excluirPaciente(id: number): Observable<any> {
    return this.http.delete(`${HUB_URL.apiDev}/usuarios/${id}`, this.headers.getHttpHeaders());
  }



}
