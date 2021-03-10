import { HelpersService } from './../helpers/helpers.service';
import { Router } from '@angular/router';
import { Paciente } from './../models/paciente.model';
import { AplicacaoVacinaService } from './aplicacao-vacina.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { cpf } from 'cpf-cnpj-validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Vacina } from '../models/vacina.model';

@Component({
  selector: 'app-aplicacao-vacina',
  templateUrl: './aplicacao-vacina.component.html',
  styleUrls: ['./aplicacao-vacina.component.scss']
})
export class AplicacaoVacinaComponent implements OnInit {

  public formulario: FormGroup;
  public formularioPaciente: FormGroup;
  public formularioBusca: FormGroup;
  public paciente: any;
  public pacienteVacinas: Array<Vacina> = [];
  public cpfCnpj: string;

  constructor(
    private fb: FormBuilder,
    private aplicacaoService: AplicacaoVacinaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private helperService: HelpersService
  ) { }

  ngOnInit(): void {

    this.formularioBusca = this.fb.group({
      numeroDoCpf: ['', [Validators.required, this.validateCPF]]
    });

    this.formulario = this.fb.group({
      id: [''],
      nomeDaVacina: ['', [Validators.required]],
      dataDaAplicacao: ['', [Validators.required]],
      usuario: this.fb.group({
        id: ['', Validators.required],
        nome: [''],
        email: [''],
        numeroDoCpf: [''],
        dataDeNascimento: [''],
      })
    });
  }

  public vacinarPaciente(): void {
    this.formulario.patchValue({ nomeDaVacina: this.formataNomeVacina(this.formulario.controls.nomeDaVacina.value) });
    this.aplicacaoService.salvarVacinacao(this.formulario.value).subscribe((resp) => {
      this.openSnackBar('Paciente vacinado com Sucesso!');
      this.buscarDadosPaciente();
    }, (error) => {
      if (error.status === 400) {
        this.openSnackBar(error.error.message);
      }
      if (error.status === 422) {
        error.error.errors.forEach((element: any) => {
          this.openSnackBar(element.message);
        });
      }
    });
  }

  public buscarDadosPaciente(): void {
    this.aplicacaoService.buscarPorCpfPaciente(this.formularioBusca.controls.numeroDoCpf.value).subscribe((resp) => {
      this.paciente = new Paciente({ ...resp });
      this.aplicacaoService.buscarVacinaPorPaciente(this.paciente.getId()).subscribe((resp: any) => {
        this.pacienteVacinas = [];
        resp.forEach((element: any) => {
          const vacina = new Vacina({ ...element });
          this.pacienteVacinas.push(vacina);
        });
      });

      this.formulario.controls.usuario.patchValue({
        id: this.paciente.getId(),
        nome: this.paciente.getNome(),
        email: this.paciente.getEmail(),
        numeroDoCpf: this.paciente.getNumeroDoCpf(),
        dataDeNascimento: this.paciente.getDataDeNascimento(),
      });
    }, (error) => {
      if (error.status === 404) {
        this.openSnackBar(error.error.message);
        this.limpaCampos();
      }
    });
  }

  public isCPF(): boolean {
    return this.cpfCnpj == null ? true : this.cpfCnpj.length < 12 ? true : false;
  }

  public getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

  public validateCPF(control: AbstractControl): { [key: string]: any } | null {
    if (!cpf.isValid(control.value)) {
      return { 'cpfValid': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }

  public openSnackBar(message: string): void {
    this.snackBar.open(message, '', { duration: 2000 });
  }

  public adicionaPacienteVacinado(obj: FormGroup): void {
    let vacinaForm = this.formulario.get('usuario') as FormArray;
    vacinaForm.push(obj);
  }

  public formataNomeVacina(nome: string): string {
    return this.helperService.formataNome(nome);
  }

  public excluir(id: any): void {
    if (id !== null || id !== undefined) {
      this.aplicacaoService.excluirVacinaDoPaciente(id).subscribe(() => {
        this.buscarDadosPaciente();
        this.openSnackBar('Vacinação excluida com Sucesso!');
      }, error => console.log(error));
    }
  }

  public limpaCampos(): void {
    this.paciente = undefined;
    this.pacienteVacinas = [];
    this.formulario.reset();
    this.formularioPaciente.reset();
    this.formularioBusca.reset();
  }

}
