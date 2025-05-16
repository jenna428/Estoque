import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  hide: boolean = true;


  constructor(
    private readonly fb: FormBuilder,
    private readonly funcionarioService: FuncionarioService,
  ) {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]], 
    })
   }

  ngOnInit(): void {
  }

  submit(){}

}
