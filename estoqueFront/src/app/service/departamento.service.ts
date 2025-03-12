import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { DepartamentoDto } from '../dto/departamento.dto';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor() { }
  async findAll(): Promise <DepartamentoDto[]> {
    const resposta = await axios.get(environment.api_url + 'departamento');
    return resposta.data;
  }

  async save(departamentoDto: DepartamentoDto) {
    await axios.post(environment.api_url + 'departamento', departamentoDto);
  }
}

