import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FuncionarioDto } from '../dto/funcionario.dto';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }
  async findAll(): Promise <FuncionarioDto[]> {
    const resposta = await axios.get(environment.api_url + 'funcionario');
    return resposta.data;
  }

  async save(funcionarioDto: FuncionarioDto) {
    await axios.post(environment.api_url + 'funcionario', funcionarioDto);
  }
}

