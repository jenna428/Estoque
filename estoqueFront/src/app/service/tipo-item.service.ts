import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { TipoItemDto } from '../dto/tipo-item.dto';

@Injectable({
  providedIn: 'root'
})
export class TipoItemService{

  constructor() { }
  async findAll(): Promise <TipoItemDto[]> {
    const resposta = await axios.get(environment.api_url + 'tipo-item');
    return resposta.data;
  }

  async save(tipoItemDto: TipoItemDto) {
    await axios.post(environment.api_url + 'tipo-item', tipoItemDto);
  }

  async filterSearch(search: String): Promise<TipoItemDto[]> {
    const reponse = await axios.get(environment.api_url + 'tipo-item/filter-search/' + search);
    return reponse.data;
  }

  
}