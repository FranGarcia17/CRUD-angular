import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Empleado } from './Interfaces/empleado';
import { EmpleadoService } from './Services/empleado.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from './Modals/dialog-delete/dialog-delete.component';
import { DialogAddEditComponent } from './Modals/dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'NombreCompleto',
    'Departamento',
    'Sueldo',
    'FechaContrato',
    'Acciones',
  ];
  dataSource = new MatTableDataSource<Empleado>();
  title = 'FrontEndCRUD';

  constructor(
    private _empleadoService: EmpleadoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  showAlert(msj: string, accion: string) {
    this._snackBar.open(msj, accion, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  dialogNuevoEmpleado() {
    this.dialog
      .open(DialogAddEditComponent, {
        disableClose: true,
        width: '350px',
      })
      .afterClosed()
      .subscribe((resultado) => {
        if (resultado === 'creado') {
          this.mostrarEmpleados();
        }
      });
  }

  dialogoEditarEmpleado(dataEmpleado: Empleado) {
    this.dialog
      .open(DialogAddEditComponent, {
        disableClose: true,
        width: '350px',
        data: dataEmpleado,
      })
      .afterClosed()
      .subscribe((resultado) => {
        if (resultado === 'editado') {
          this.mostrarEmpleados();
        }
      });
  }

  dialogoEliminarEmpleado(dataEmpleado: Empleado) {
    this.dialog
      .open(DialogDeleteComponent, {
        disableClose: true,
        data: dataEmpleado,
      })
      .afterClosed()
      .subscribe((resultado) => {
        if (resultado === 'eliminar') {
          this._empleadoService.delete(dataEmpleado.idEmpleado).subscribe({
            next: (data) => {
              this.showAlert("Empleado eliminado", "Listo");
              this.mostrarEmpleados();
            }, error: (e) => {console.log(e)}
          })
        }
      });
  }

  mostrarEmpleados() {
    debugger;
    this._empleadoService.getList().subscribe({
      next: (dataResponse) => {
        console.log(dataResponse);
        this.dataSource.data = dataResponse;
      },
      error: (e) => {},
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
