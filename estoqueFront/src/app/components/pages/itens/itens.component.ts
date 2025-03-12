import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemDto } from 'src/app/dto/item.dto';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  formSearch: FormGroup;

  displayedColumns: string[] = ['nome', 'codigoBarra'];
  dataSource: ItemDto[] = [];

  constructor(
    private readonly itemService: ItemService,
    private readonly fb: FormBuilder
  ) {
    this.formSearch = this.fb.group({
      search: ['', [Validators.required]],
      submit: ['']
    })
  }

  ngOnInit(): void {
  }

  

  /*Busca */
  async submit() {
    const search = this.formSearch?.get('search')?.value;
    this.dataSource = await this.itemService.filterSearch(search);

    console.log(this.dataSource);
  }

}