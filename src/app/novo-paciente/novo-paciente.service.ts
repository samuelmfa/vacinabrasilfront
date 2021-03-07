import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HUB_URL } from '../config/hub-url';
import { HttpConfig } from '../config/http.config';
import { Paciente } from '../models/paciente.model';
import { Observable } from 'rxjs';

@Injectable()
export class NovoPacienteService {

  constructor(private http: HttpClient, private headers: HttpConfig) { }

  public salvarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post<Paciente>(`${HUB_URL.apiDev}/usuarios`, paciente, this.headers.getHttpHeaders());
  }


}
