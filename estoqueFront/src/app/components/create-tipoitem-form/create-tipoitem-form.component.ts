import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { TipoItemService } from 'src/app/service/tipo-item.service';

@Component({
  selector: 'app-create-tipoitem-form',
  templateUrl: './create-tipoitem-form.component.html',
  styleUrls: ['./create-tipoitem-form.component.css']
})
export class CreateTipoitemFormComponent implements OnInit {
  form: FormGroup;

  departamentos: DepartamentoDto [] = []


  constructor(
    private readonly fb: FormBuilder,
    private readonly tipoitemService: TipoItemService,
    private readonly departamentoService: DepartamentoService,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      departamento: ['', [Validators.required]],
      preco: ['', [Validators.required]]
    })
  }

  async ngOnInit(): Promise<void> {

    this.departamentos = await this.departamentoService.findAll();
  }


  async submit(){
    const tipoitemDto: TipoItemDto = {
      nome: this.form.get('nome')?.value,
      departamento: this.form.get('departamento')?.value,
      preco: this.form.get('preco')?.value
    }

    await this.tipoitemService.save(tipoitemDto);
    console.log(this.form.get('departamento')?.value);
    console.log(this.form.get('nome')?.value);
  }
}
