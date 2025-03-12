import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoDto } from 'src/app/dto/departamento.dto';
import { DepartamentoService } from 'src/app/service/departamento.service';

@Component({
  selector: 'app-create-departamento-form',
  templateUrl: './create-departamento-form.component.html',
  styleUrls: ['./create-departamento-form.component.css']
})
export class CreateDepartamentoFormComponent implements OnInit {
 form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly departamentoService: DepartamentoService,
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  async ngOnInit(): Promise<void> {

  }


  submit(){
    const departamentoDto: DepartamentoDto = {
      nome: this.form.get('nome')?.value,
    }

    this.departamentoService.save(departamentoDto);
    console.log(this.form.get('departamento')?.value);
    console.log(this.form.get('nome')?.value);
  }

}
