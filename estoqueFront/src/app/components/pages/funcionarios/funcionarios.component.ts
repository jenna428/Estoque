import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioDto } from 'src/app/dto/funcionario.dto';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { CreateFuncionarioFormComponent } from '../../create-funcionario-form/create-funcionario-form.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  formSearch: FormGroup;
    
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: FuncionarioDto[] = [];
  constructor(
      private readonly funcionarioService: FuncionarioService,
      private readonly fb: FormBuilder,
      private readonly dialog: MatDialog,
    ) {
      this.formSearch = this.fb.group({
        search: ['', [Validators.required]],
        submit: ['']
      })
    }

    async ngOnInit() {
      this.dataSource = await this.funcionarioService.findAll()
      console.log('data:', this.dataSource);
    }

    openCreateFuncionarioDialog() {
        this.dialog.open(CreateFuncionarioFormComponent, {
          width: '400px',
          height: '400px',
        })
    }
}
