import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/enums/enums';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  get isLogin(): boolean {
    return this.loginService.check();
  }

  logout(){
    this.loginService.logout()
  }

}
