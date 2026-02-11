import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FornecedorDto } from 'src/app/dto/fornecedor.dto';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { CreateFornecedorFormComponent } from '../../create-fornecedor-form/create-fornecedor-form.component';
import { LoginService } from 'src/app/service/login.service';
import { Role } from 'src/app/enums/enums';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

formSearch: FormGroup;
    
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: FornecedorDto[] = [];
  constructor(
      private readonly fornecedorService: FornecedorService,
      private readonly fb: FormBuilder,
      private readonly dialog: MatDialog,
      private readonly loginService: LoginService
    ) {
      this.formSearch = this.fb.group({
        search: ['', [Validators.required]],
        submit: ['']
      })
    }

    get isAdmin(): boolean {
    return this.loginService.hasRole(Role.ADMIN);
    }
    async ngOnInit() {
      this.dataSource = await this.fornecedorService.findAll()
      console.log('data:', this.dataSource);
    }

    openCreateFornecedorDialog() {
        const dialogRef = this.dialog.open(CreateFornecedorFormComponent, {
          width: '400px',
          height: '550px',
        });

        /*Reload Table*/
        dialogRef.afterClosed().subscribe(async (result) => {
        this.dataSource = await this.fornecedorService.findAll();
        });
    }
}
