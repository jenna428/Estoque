import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { FornecedorDto } from 'src/app/dto/fornecedor.dto';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { TipoItemService } from 'src/app/service/tipo-item.service';
import { CreateDepartamentoFormComponent } from '../create-departamento-form/create-departamento-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-tipoitem-form',
  templateUrl: './create-tipoitem-form.component.html',
  styleUrls: ['./create-tipoitem-form.component.css']
})
export class CreateTipoitemFormComponent implements OnInit {
  form: FormGroup;

  departamentos: DepartamentoDto [] = []
  fornecedores: FornecedorDto [] = []


  constructor(
    private readonly fb: FormBuilder,
    private readonly tipoitemService: TipoItemService,
    private readonly departamentoService: DepartamentoService,
    private readonly fornecedorService: FornecedorService,
    private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef <CreateTipoitemFormComponent>
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      departamento: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      fornecedor: ['', [Validators.required]],
    })
  }

  async ngOnInit(): Promise<void> {
    this.departamentos = await this.departamentoService.findAll();
    await this.carregarFornecedores();
  }

  async carregarFornecedores() {
    this.fornecedores = await this.fornecedorService.findAll();
  }

  openCreateDepartamentoDialog(){
     this.dialog.open(CreateDepartamentoFormComponent, {
      width: '400px',
      height: '400px',
    });
  }

  submit() {
    const tipoitemDto: TipoItemDto = {
      nome: this.form.get('nome')?.value,
      departamento: this.form.get('departamento')?.value,
      preco: this.form.get('preco')?.value.replace(',', '.'),
      fornecedor: this.form.get('fornecedor')?.value,
    }

    this.tipoitemService.save(tipoitemDto);
    this.dialogRef.close()
  }
      
  
}
