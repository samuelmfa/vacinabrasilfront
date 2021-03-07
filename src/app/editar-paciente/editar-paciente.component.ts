import { EditarpacienteService } from './editarpaciente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../models/paciente.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validators as ValidatorCustom } from 'angular-reactive-validation';
import { cpf } from 'cpf-cnpj-validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelpersService } from '../helpers/helpers.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  public paciente: any;
  public formulario: FormGroup;
  public cpfCnpj: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private editarpacienteService: EditarpacienteService,
    private helpersService: HelpersService,
    public fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.editarpacienteService.buscarPaciente(params['id']).subscribe((resposta: any) => {
          this.paciente = new Paciente({ ...resposta });
          this.formulario = this.fb.group({
            id: [this.paciente.getId()],
            nome: [this.paciente.getNome(), [ValidatorCustom.required('Nome é obrigatório')]],
            email: [this.paciente.getEmail(), [Validators.email, ValidatorCustom.required('Email é Obrigatório')]],
            numeroDoCpf: [this.paciente.getNumeroDoCpf(), [ValidatorCustom.required('CPF é Obrigatorio'), this.validateCPF]],
            dataDeNascimento: [this.paciente.getDataDeNascimento(), [ValidatorCustom.required('Data de nasc. é Obrigatória')]],
          });
        }, (error) => {
          if (error.status === 404) {
            this.router.navigate(['']);
          }
        });
      } else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit(): void {

  }

  public atualizarDadosPaciente(): void {
    this.editarpacienteService.salvarPaciente(this.ajustaDados(this.formulario).value).subscribe((resp) => {
      this.openSnackBar('Paciente atualizado com sucesso.');
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









