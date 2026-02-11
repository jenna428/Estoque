import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioDto } from 'src/app/dto/funcionario.dto';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { CreateFuncionarioFormComponent } from '../../create-funcionario-form/create-funcionario-form.component';
import { LoginService } from 'src/app/service/login.service';
import { Role } from 'src/app/enums/enums';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  formSearch: FormGroup;
    
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: FuncionarioDto[] = [];

  get isAdmin(): boolean {
    return this.loginService.hasRole(Role.ADMIN);
  }

  constructor(
      private readonly funcionarioService: FuncionarioService,
      private readonly fb: FormBuilder,
      private readonly dialog: MatDialog,
      private readonly loginService: LoginService
    ) {
      this.formSearch = this.fb.group({
        search: ['', [Validators.required]],
        submit: ['']
      })
    }

    async ngOnInit() {
      this.dataSource = await this.funcionarioService.findAll();

      if (this.isAdmin) {
        // é admin
      } else {
        // nao é admin
      }
    }

    openCreateFuncionarioDialog() {
        const dialogRef = this.dialog.open(CreateFuncionarioFormComponent, {
          width: '400px',
          height: '610px',
        });

        /*Reload Table*/
        dialogRef.afterClosed().subscribe(async (result) => {
          this.dataSource = await this.funcionarioService.findAll();
        });
    }
}
