import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/dto/login.dto';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  hide: boolean = true;

  get isFormValid(): boolean {
    return !this.form.valid;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private router: Router
  ) {
  this.form = this.fb.group({
    user: ['', [Validators.required, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(8)]],
    keepConected: false,
  })
  }

  ngOnInit(): void {
    if(this.loginService.check()){
      this.router.navigate(['/itens'])
    }
  }

  async submit() {
    const dto: LoginDto = {
      username: this.form.get('user')?.value,
      password: this.form.get('password')?.value
    };

    const resp = await this.loginService.login(dto);
    console.log('resp', resp);
  }

}
