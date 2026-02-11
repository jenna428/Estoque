import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FornecedorDto } from 'src/app/dto/fornecedor.dto';
import { FornecedorService } from 'src/app/service/fornecedor.service';

@Component({
  selector: 'app-create-fornecedor-form',
  templateUrl: './create-fornecedor-form.component.html',
  styleUrls: ['./create-fornecedor-form.component.css']
})
export class CreateFornecedorFormComponent implements OnInit {
 form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly funcionarioService: FornecedorService,
    private readonly dialogRef: MatDialogRef <CreateFornecedorFormComponent>
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      cnpj: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  async ngOnInit(): Promise<void> {

  }


  async submit(){
    const funcionarioDto: FornecedorDto = {
      nome: this.form.get('nome')?.value,
      cnpj: this.form.get('nome')?.value,
      cep: this.form.get('nome')?.value,
      telefone: this.form.get('nome')?.value,
      email: this.form.get('nome')?.value,
    }

    await this.funcionarioService.save(funcionarioDto);
    this.dialogRef.close()
  }


}
