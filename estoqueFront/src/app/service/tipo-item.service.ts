import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoItemDto } from '../dto/tipo-item.dto';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class TipoItemService{

  constructor(
    private readonly http: HttpService
  ) { }

  async findAll(): Promise <TipoItemDto[]> {
    const resposta = await this.http.get<TipoItemDto[]>(environment.api_url + 'tipo-item');
    return resposta.data.map(item => ({
      ...item,
      preco: Number(item.preco)// 2.5s 2.n
    }));
  }

  async save(tipoItemDto: TipoItemDto) {
    await this.http.post(environment.api_url + 'tipo-item', tipoItemDto);
  }

  async filterSearch(search: String): Promise<TipoItemDto[]> {

    if (!search || search.trim() === '') {
      return this.findAll();
    }

    const reponse = await this.http.get<TipoItemDto[]>(environment.api_url + `tipo-item/filter-search/${search}`);
      return reponse.data.map(item => ({
      ...item,
      preco: item.preco
    }));
  }

  async filterOrder(order: string): Promise<TipoItemDto[]> {
    const response = await this.http.get<TipoItemDto[]>(environment.api_url + 'tipo-item/filter-order/' + order);
    return response.data.map(item => ({
      ...item,
      preco: item.preco
    }));
  }
}