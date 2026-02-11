import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItensComponent } from './components/pages/itens/itens.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

//
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateItemFormComponent } from './components/create-item-form/create-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { CreateDepartamentoFormComponent } from './components/create-departamento-form/create-departamento-form.component';
import { CreateTipoitemFormComponent } from './components/create-tipoitem-form/create-tipoitem-form.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { LoginComponent } from './components/pages/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { CreateFuncionarioFormComponent } from './components/create-funcionario-form/create-funcionario-form.component';
import { CreateFornecedorFormComponent } from './components/create-fornecedor-form/create-fornecedor-form.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedorComponent } from './components/pages/fornecedor/fornecedor.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CookieService } from 'ngx-cookie-service';
import { RolePipe } from './pipes/role.pipe';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DeleteItemFormComponent } from './components/delete-item-form/delete-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItensComponent,
    CreateItemFormComponent,
    CreateDepartamentoFormComponent,
    CreateTipoitemFormComponent,
    ProdutosComponent,
    LoginComponent,
    CreateFuncionarioFormComponent,
    CreateFornecedorFormComponent,
    FuncionariosComponent,
    FornecedorComponent,
    RolePipe,
    DeleteItemFormComponent
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
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
