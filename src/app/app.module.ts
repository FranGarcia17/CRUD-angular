import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//1 Trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

//2. Trabajar con peticiones http
import { HttpClientModule } from '@angular/common/http';

//3.trabajar con tablas de Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

//4. Para trabajar con controles de forms reactivos
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';

//5 trabajar con con mensajes de alerta
import { MatSnackBarModule } from '@angular/material/snack-bar';

//6 trabajar con iconos de material
import { MatIconModule } from '@angular/material/icon';

//7 Para trabajar con modales de material
import { MatDialogModule } from '@angular/material/dialog';

//8 para trabajar con cuadriculas
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddEditComponent } from './Modals/dialog-add-edit/dialog-add-edit.component';
import { DialogDeleteComponent } from './Modals/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [AppComponent, DialogAddEditComponent, DialogDeleteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
