import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { ItemDto } from 'src/app/dto/item.dto';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
import { ItemService } from 'src/app/service/item.service';
import { TipoItemService } from 'src/app/service/tipo-item.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {
  form: FormGroup;

  departamentos: DepartamentoDto[] = [];

  tipos: TipoItemDto[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly itemService: ItemService,
    private readonly tipoitemService: TipoItemService,
    private readonly dialogRef: MatDialogRef <CreateItemFormComponent>
  ) {
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.maxLength(11)]],
      tipo: [ '', [Validators.required]]
    })
  }

  async ngOnInit(): Promise<void> {
    this.tipos = await this.tipoitemService.findAll()
  }


  async submit(){
    const itemDto: ItemDto = {
      codigoBarra: this.form.get('codigo')?.value,
      tipo: this.form.get('tipo')?.value,
    }

    await this.itemService.save(itemDto);
    this.dialogRef.close()
  }
}
