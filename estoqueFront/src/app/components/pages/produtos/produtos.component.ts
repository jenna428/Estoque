import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemDto } from 'src/app/dto/item.dto';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  /* Busca */
  formSearch: FormGroup;
  dataSource: ItemDto[] = [];

  /*tabela */
  displayedColumns: string[] = ['nome', 'preco'];

  constructor(
      private readonly itemService: ItemService,
      private readonly fb: FormBuilder
    ) {
      /* Busca */
      this.formSearch = this.fb.group({
        search: ['', [Validators.required]],
        submit: ['']
      })
    }

  ngOnInit(): void {
  }

  /*filtros*/
  sidebarOpen = false;
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  applyFilters() {
    console.log('Filtros aplicados');
    this.toggleSidebar();
  }

  /*Busca */
  async submit() {
    const search = this.formSearch?.get('search')?.value;
    this.dataSource = await this.itemService.filterSearch(search);

    console.log(this.dataSource);
  }

}
