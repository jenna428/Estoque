import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioDto } from 'src/app/dto/funcionario.dto';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-create-funcionario-form',
  templateUrl: './create-funcionario-form.component.html',
  styleUrls: ['./create-funcionario-form.component.css']
})
export class CreateFuncionarioFormComponent implements OnInit {
 form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly funcionarioService: FuncionarioService,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      cpf: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  async ngOnInit(): Promise<void> {

  }


  submit(){
    const funcionarioDto: FuncionarioDto = {
      nome: this.form.get('nome')?.value,
      cpf: this.form.get('nome')?.value,
      cep: this.form.get('nome')?.value,
      telefone: this.form.get('nome')?.value,
      email: this.form.get('nome')?.value,
    }

    this.funcionarioService.save(funcionarioDto);
  }

}
