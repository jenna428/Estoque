import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../enums/enums';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(role: Role): string {
    switch(role) {
        case Role.ADMIN:
            return 'Admin';
        case Role.EMPLOYEE:
            return 'Funcionario';
        default:
            return '';
    }
  }
}