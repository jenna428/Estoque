import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { FornecedorDto } from 'src/app/dto/fornecedor.dto';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { TipoItemService } from 'src/app/service/tipo-item.service';
import { CreateFornecedorFormComponent } from '../create-fornecedor-form/create-fornecedor-form.component';
import { MatDialog } from '@angular/material/dialog';

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

  async submit() {
    const tipoitemDto: TipoItemDto = {
      nome: this.form.get('nome')?.value,
      departamento: this.form.get('departamento')?.value,
      preco: this.form.get('preco')?.value,
      fornecedor: this.form.get('fornecedor')?.value,
    }

    await this.tipoitemService.save(tipoitemDto);
    console.log(this.form.get('departamento')?.value);
    console.log(this.form.get('nome')?.value);
  }

  async openCreateFornecedorDialog(){
    await this.dialog.open(CreateFornecedorFormComponent, {
      width: '400px',
      height: '700px',
    })

    await this.carregarFornecedores();
  }
}
