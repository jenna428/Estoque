import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FuncionarioDto } from '../dto/funcionario.dto';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private readonly http: HttpService,
  ) { }

  async findAll(): Promise <FuncionarioDto[]> {

    const resposta = await this.http.get<FuncionarioDto[]>(environment.api_url + 'funcionario');
    return resposta.data;
  }

  async save(createFuncionarioDto: CreateFuncionarioDto) {
    await this.http.post(environment.api_url + 'funcionario', createFuncionarioDto);
  }
}

