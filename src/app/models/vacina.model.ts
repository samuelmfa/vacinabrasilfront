import { Paciente } from './paciente.model';
import * as moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export class Vacina {

  private id?: number | null | undefined = null;
  private nomeDaVacina: string;
  private dataDaAplicacao: string;
  private dataDaAplicacaoFormatada?: string;
  private usuario: Paciente;

  constructor(vacina: Vacina) {
    this.id = vacina.id;
    this.nomeDaVacina = vacina.nomeDaVacina;
    this.dataDaAplicacao = vacina.dataDaAplicacao;
    this.usuario = vacina.usuario;
    this.dataDaAplicacaoFormatada = this.getDataDaAplicacaoFormatada(vacina.dataDaAplicacao);
  }


  public getId(): number | null | undefined {
    return this.id;
  }

  public getNomeDaVacina(): string {
    return this.nomeDaVacina;
  }

  public setNomeDaVacina(nome: string): void {
    this.nomeDaVacina = nome;
  }

  public getDataDaAplicacao(): string {
    return this.dataDaAplicacao;
  }

  public getDataDaAplicacaoFormatada(data: string): string {
    return this.dataDaAplicacaoFormatada = moment(data).format('DD/MM/YYYY');
  }

  public setDataDaAplicacao(dataAplicacao: string): void {
    this.dataDaAplicacao = dataAplicacao;
  }

  public getPaciente(): Paciente {
    return this.usuario;
  }
  public setPaciente(paciente: Paciente): void {
    this.usuario = paciente;
  }




}



