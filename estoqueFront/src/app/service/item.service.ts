import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemDto } from '../dto/item.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private readonly http: HttpService
  ) { }

  async save(itemDto: ItemDto) {
    await this.http.post(environment.api_url + 'item', itemDto);
  }
  async delete(id: number | undefined){
    await this.http.delete(environment.api_url + 'item/' + id);
  }

  async filterSearch(search: String): Promise<ItemDto[]> {
    // if(search != ''){
    //   const reponse = await this.http.get<ItemDto[]>(environment.api_url + 'item/teste/' + search);
    //   return reponse.data;
    // }

    // return this.findAll();

    if (!search || search.trim() === '') {
      return this.findAll();
    }

    const reponse = await this.http.get<ItemDto[]>(environment.api_url + 'item/teste/' + search);
    return reponse.data;
  }

  async findAll(): Promise<ItemDto[]> {
    const reponse = await this.http.get<ItemDto[]>(environment.api_url + 'item');
    return reponse.data;
  }

  private searchParamsBuilder(search: String) {
    const options = {
      search: search,
    }
    return options;
  }
}

