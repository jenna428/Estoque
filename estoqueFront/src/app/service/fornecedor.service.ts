import { Injectable } from '@angular/core';
import { FornecedorDto } from '../dto/fornecedor.dto';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    private readonly http: HttpService
  ) { }
  async findAll(): Promise <FornecedorDto[]> {
    const resposta = await this.http.get<FornecedorDto[]>(environment.api_url + 'fornecedor');
    return resposta.data;
  }

  async save(fornecedorDto: FornecedorDto) {
    await this.http.post(environment.api_url + 'fornecedor', fornecedorDto);
  }
}