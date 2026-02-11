import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'estoqueFront';

  constructor(
    private router: Router,
    private readonly loginService: LoginService
  ) {}



  ngOnInit(): void {
    if(!this.loginService.check()){
      this.router.navigate(['/login'])
    }
  }

  
}
