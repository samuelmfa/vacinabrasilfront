import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validators as ValidatorCustom } from 'angular-reactive-validation';
import { cpf } from 'cpf-cnpj-validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NovoPacienteService } from './novo-paciente.service';
import { HelpersService } from '../helpers/helpers.service';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.scss']
})
export class NovoPacienteComponent implements OnInit {

  public formulario: FormGroup;
  public cpfCnpj: string;

  constructor(
    private router: Router,
    private novoPacienteService: NovoPacienteService,
    private helpersService: HelpersService,
    public fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.formulario = this.fb.group({
      id: [''],
      nome: ['', [ValidatorCustom.required('Nome é obrigatório')]],
      email: ['', [Validators.email, ValidatorCustom.required('Email é Obrigatório')]],
      numeroDoCpf: ['', [ValidatorCustom.required('CPF é Obrigatorio'), this.validateCPF]],
      dataDeNascimento: ['', [ValidatorCustom.required('Data de nasc. é Obrigatória')]],
    });
  }

  ngOnInit(): void {
  }

  public salvarDadosPaciente(): void {
    this.novoPacienteService.salvarPaciente(this.ajustaDados(this.formulario).value).subscribe((resp) => {
      this.openSnackBar('Paciente registrado com sucesso.');
      this.router.navigate(['']);
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

  public ajustaDados(obj: FormGroup): FormGroup {
    return this.helpersService.ajustaDadosPaciente(obj);
  }

}
