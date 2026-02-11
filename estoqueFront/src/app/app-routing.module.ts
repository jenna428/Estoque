import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedorComponent } from './components/pages/fornecedor/fornecedor.component';
import { ItensComponent } from './components/pages/itens/itens.component';

const routes: Routes = [
  { path: '', redirectTo: '/itens', pathMatch: 'full' },
  { path: 'itens', component: ItensComponent},
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
