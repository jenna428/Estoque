import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dto/login.dto';
import { CookieService } from 'ngx-cookie-service';
import { Role } from '../enums/enums';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  get roles(): Role[] {
    const cookiesRoles = this.cookie.get(this.getRolesKey()); // 'ADMIN,CLIENT'
    const stringRoles = cookiesRoles.split(','); // ['ADMIN', 'CLIENT']
    return stringRoles as Role[]; // [Role.ADMIN, Role.CLIENT]
  }

  constructor(
    private readonly cookie: CookieService,
    private router: Router
  ) {}

  async login(loginDto: LoginDto): Promise<void> {
    const response = await axios.post(environment.api_url + 'login', loginDto);

    this.cookie.set(this.getAccessTokenKey(), response.data.access_token); // Coloca token nos cookies

    const roles: Role[] = response.data.roles;

    this.cookie.set(this.getRolesKey(), roles.join(',')); // Coloca roles nos cookies

    if(this.check()){
      this.router.navigate(['/itens']);
    }
  }

  hasRole(role: Role): boolean {
    return this.roles.some(r => r === role);
  }

  check(): boolean {
    return this.cookie.check(this.getAccessTokenKey());  
  }
 
  logout() {
    this.cookie.delete(this.getAccessTokenKey());
    this.cookie.delete(this.getRolesKey());
  }

  getAccessTokenKey(): string {
    return 'access_token' 
  }

  getRolesKey(): string {
    return 'roles'
  }

}