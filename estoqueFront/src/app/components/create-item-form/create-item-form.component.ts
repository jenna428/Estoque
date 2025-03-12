import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { ItemDto } from 'src/app/dto/item.dto';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
//import { DepartamentoService } from 'src/app/service/departamento.service';
import { ItemService } from 'src/app/service/item.service';
import { TipoItemService } from 'src/app/service/tipo-item.service';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {
  form: FormGroup;
  //toppings = new FormControl();

  departamentos: DepartamentoDto[] = [];

  tipos: TipoItemDto[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly itemService: ItemService,
    //private readonly departamentoService: DepartamentoService,
    private readonly tipoitemService: TipoItemService
  ) {
    this.form = this.fb.group({
      //nome: ['', [Validators.required, Validators.maxLength(50)]],
      //preco: ['', [Validators.required]],
      //marca: ['', [Validators.required, Validators.maxLength(30)]],
      codigo: ['', [Validators.required, Validators.maxLength(11)]],
      //departamento: ['', [Validators.required]],
      tipo: [ '', [Validators.required]]
    })
  }

  async ngOnInit(): Promise<void> {

    //this.departamentos = await this.departamentoService.findAll();
    this.tipos = await this.tipoitemService.findAll()
  }


  async submit(){
    const itemDto: ItemDto = {
      //nome: this.form.get('nome')?.value,
      //preco: this.form.get('preco')?.value,
      //marca: this.form.get('marca')?.value,
      codigoBarra: this.form.get('codigo')?.value,
      //departamento: this.form.get('departamento')?.value,
      tipo: this.form.get('tipo')?.value,
    }

    await this.itemService.save(itemDto);
    //console.log(this.form.get('departamento')?.value);
    console.log(this.form.get('nome')?.value);
  }

}
