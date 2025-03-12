import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ItensComponent } from './components/pages/itens/itens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

//
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarFiltersComponent } from './components/pages/navbar-filters/navbar-filters.component';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { CreateDepartamentoFormComponent } from './components/create-departamento-form/create-departamento-form.component';
import { CreateTipoitemFormComponent } from './components/create-tipoitem-form/create-tipoitem-form.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItensComponent,
    CreateItemFormComponent,
    NavbarFiltersComponent,
    CreateDepartamentoFormComponent,
    CreateTipoitemFormComponent,
    ProdutosComponent,
    LoginComponent
  ],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
