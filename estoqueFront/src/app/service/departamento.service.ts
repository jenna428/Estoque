import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DepartamentoDto } from '../dto/departamento.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(
    private readonly http: HttpService
  ) { }
  async findAll(): Promise <DepartamentoDto[]> {
    const resposta = await this.http.get<DepartamentoDto[]>(environment.api_url + 'departamento');
    return resposta.data;
  }

  async save(departamentoDto: DepartamentoDto) {
    await this.http.post(environment.api_url + 'departamento', departamentoDto);
  }
}

