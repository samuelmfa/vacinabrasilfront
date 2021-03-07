import * as moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export class Paciente {

  private id?: number | null | undefined = null;
  private nome: string;
  private email: string;
  private numeroDoCpf: string;
  private dataDeNascimento: string;
  private dataDeNascimentoFormatada?: string;

  constructor(paciente: Paciente) {
    this.id = paciente.id;
    this.nome = paciente.nome;
    this.email = paciente.email.toLowerCase();
    this.numeroDoCpf = paciente.numeroDoCpf;
    this.dataDeNascimento = paciente.dataDeNascimento;
    this.dataDeNascimentoFormatada = this.getDataDeNascimentoFormatada(paciente.dataDeNascimento);
  }

  public getId(): number | null | undefined {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email.toLowerCase();
  }

  public getNumeroDoCpf(): string {
    return this.numeroDoCpf;
  }

  public setNumeroDoCpf(cpf: string): void {
    this.numeroDoCpf = cpf;
  }

  public getDataDeNascimento(): string {
    return this.dataDeNascimento;
  }

  public getDataDeNascimentoFormatada(data: string): string {

    return this.dataDeNascimentoFormatada = moment(data).format('DD/MM/YYYY');

  }

  public setDataDeNascimento(dataDeNascimento: string): void {
    this.dataDeNascimento = dataDeNascimento;
  }


}
