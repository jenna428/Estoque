import { Injectable } from '@angular/core';
import axios from 'axios';
import { FornecedorDto } from '../dto/fornecedor.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor() { }
  async findAll(): Promise <FornecedorDto[]> {
    const resposta = await axios.get(environment.api_url + 'fornecedor');
    return resposta.data;
  }

  async save(fornecedorDto: FornecedorDto) {
    await axios.post(environment.api_url + 'fornecedor', fornecedorDto);
  }
}