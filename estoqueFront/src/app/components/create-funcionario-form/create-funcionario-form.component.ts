import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateFuncionarioDto } from 'src/app/dto/create-funcionario.dto';
import { Role } from 'src/app/enums/enums';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-create-funcionario-form',
  templateUrl: './create-funcionario-form.component.html',
  styleUrls: ['./create-funcionario-form.component.css']
})
export class CreateFuncionarioFormComponent implements OnInit {
 form: FormGroup;

  roles : Role [] = Object.values(Role);
  constructor(
    private readonly fb: FormBuilder,
    private readonly funcionarioService: FuncionarioService,
    private readonly dialogRef: MatDialogRef <CreateFuncionarioDto>
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(8)]],
      role: [''],
    })
  }

  async ngOnInit(): Promise<void> {

  }


  submit(){
    const createFuncionarioDto: CreateFuncionarioDto = {
      nome: this.form.get('nome')?.value,
      cpf: this.form.get('cpf')?.value,
      cep: this.form.get('cep')?.value,
      telefone: this.form.get('telefone')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      role: this.form.get('role')?.value,
    }

    this.funcionarioService.save(createFuncionarioDto);
    this.dialogRef.close()
  }

}
