import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HUB_URL } from '../config/hub-url';
import { HttpConfig } from '../config/http.config';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';

@Injectable()
export class EditarpacienteService {

  constructor(private http: HttpClient, private headers: HttpConfig) { }


  public buscarPaciente(id: number): Observable<any> {
    return this.http.get<Paciente>(`${HUB_URL.apiDev}/usuarios/${id}`, this.headers.getHttpHeaders());
  }

  public salvarPaciente(paciente: Paciente): Observable<any> {
    return this.http.put<Paciente>(`${HUB_URL.apiDev}/usuarios`, paciente, this.headers.getHttpHeaders());
  }

}
