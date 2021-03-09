import { Paciente } from './../models/paciente.model';
import { HomeService } from './home.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDilogComponent } from '../components/confirm-dilog/confirm-dilog.component';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['nome', 'email', 'numeroDoCpf', 'dataDeNascimento', 'acoes'];
  public pacientes$: Array<Paciente> = [];
  public dataSource = new MatTableDataSource(this.pacientes$);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private homeService: HomeService, private dialog: MatDialog) {
    this.buscarTodosOsPacientes();
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  public aplicarPaginator(pacientes: any): void {
    this.dataSource = new MatTableDataSource(pacientes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.firstPage();
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmDilogComponent, { width: '300px' });
    return dialogRef.afterClosed();
  }

  public buscarTodosOsPacientes(): void {
    this.pacientes$ = [];
    this.homeService.buscarTodosPacientes()
      .subscribe((res) => {
        res.forEach((element: any) => {
          this.pacientes$.push(new Paciente({ ...element }));
        });
        this.aplicarPaginator(this.pacientes$);
      });
  }

  public excluir(id: number): void {
    this.openDialog().subscribe(result => {
      if (result) {
        this.homeService.excluirPaciente(id).subscribe((resp) => {
          this.buscarTodosOsPacientes();
        }, error => console.log(error));

      }
    });
  }

  public isCPF(cpfCnpj: string): boolean {
    return cpfCnpj == null ? true : cpfCnpj.length < 12 ? true : false;
  }

  public getCpfCnpjMask(cpfCnpj: string): string {
    return this.isCPF(cpfCnpj) ? '000.000.000-009' : '00.000.000/0000-00';
  }


}
