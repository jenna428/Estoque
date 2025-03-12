import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { ItemDto } from '../dto/item.dto';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  async save(itemDto: ItemDto) {
    await axios.post(environment.api_url + 'item', itemDto);
  }

  async filterSearch(search: String): Promise<ItemDto[]> {
    const reponse = await axios.get(environment.api_url + 'item', {params: this.searchParamsBuilder(search)});
    return reponse.data;
  }


  private searchParamsBuilder(search: String) {
    const options = {
      search: search,
    }
    return options;
  }
}

