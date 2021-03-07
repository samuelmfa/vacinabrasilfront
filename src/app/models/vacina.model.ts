import { Paciente } from './paciente.model';


export class Vacina {

  private id?: number | null | undefined = null;
  private nomeDaVacina: string;
  private dataDaAplicacao: string;
  private usuario: Paciente;

  constructor(vacina: Vacina) {
    this.id = vacina.id;
    this.nomeDaVacina = vacina.nomeDaVacina;
    this.dataDaAplicacao = vacina.dataDaAplicacao;
    this.usuario = vacina.usuario;
  }


  public getId(): number | null | undefined{
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



