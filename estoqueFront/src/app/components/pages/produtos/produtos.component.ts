import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTipoitemFormComponent } from '../../create-tipoitem-form/create-tipoitem-form.component';
import { TipoItemDto } from 'src/app/dto/tipo-item.dto';
import { TipoItemService } from 'src/app/service/tipo-item.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; /*operadores do RxJS*/

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  /*Order */
  formOrder: FormGroup;

  /* Search */
  formSearch: FormGroup;
  dataSource: TipoItemDto[] = [];

  /*Table*/
  displayedColumns: string[] = ['nome', 'departamento', 'fornecedor', 'preco'];

  constructor(
    private readonly tipoitemService: TipoItemService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
  ) {
    /*Search*/
    this.formSearch = this.fb.group({
      search: ['', [Validators.required]],
    })
    
    this.formOrder = this.fb.group({
      order: ['0', [Validators.required]]
    })     
  }

  async ngOnInit() {
    this.dataSource = await this.tipoitemService.findAll();
    console.log('data:', this.dataSource);

    // this.formSearch.get('search')?.valueChanges
    // .pipe(
    //   debounceTime(300)
    // )
    // .subscribe(async search => {
    //   this.dataSource = await this.tipoitemService.filterSearch(search);
    // });

    // this.formSearch.get('search')?.setValue('');

   
    this.formSearch.get('search')?.valueChanges
    .pipe(
      debounceTime(300), // espera 300ms depois da última tecla
      distinctUntilChanged(), // evita requisições se o valor não mudou
      switchMap(search => this.tipoitemService.filterSearch(search)) // chama o serviço
    )
    .subscribe((result: TipoItemDto[]) => {
      this.dataSource = result;
    });
  }

  /*Filter*/
  sidebarOpen = false;
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  /*Order */
  async applyFilters() {
    const order = this.formOrder?.get('order')?.value;
    this.dataSource = await this.tipoitemService.filterOrder(order);
    this.toggleSidebar();
  }

  /*Search*/
  async submit() {
    const search = this.formSearch?.get('search')?.value;
    this.dataSource = await this.tipoitemService.filterSearch(search);
  }

  openCreateTipoItemDialog(){
    const dialog = this.dialog.open(CreateTipoitemFormComponent, {
      width: '400px',
      height: '455px',
    });

    /*Reload Table*/
      dialog.afterClosed().subscribe(async (result) => {
      this.dataSource = await this.tipoitemService.findAll();
      });
  } 

}
