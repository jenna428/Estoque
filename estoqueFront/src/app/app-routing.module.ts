import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedorComponent } from './components/pages/fornecedor/fornecedor.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'login', component: LoginComponent},
  { path: 'funcionarios', component: FuncionariosComponent},
  { path: 'fornecedores', component: FornecedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
