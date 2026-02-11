import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemDto } from 'src/app/dto/item.dto';
import { ItemService } from 'src/app/service/item.service';
import { CreateItemFormComponent } from '../../create-item-form/create-item-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; /*operadores do RxJS*/
import { DeleteItemFormComponent } from '../../delete-item-form/delete-item-form.component';

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
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
  ) {
    this.formSearch = this.fb.group({
      search: ['']
    })
  }

  async ngOnInit() {
    this.dataSource = await this.itemService.findAll();

    this.formSearch.get('search')?.valueChanges
    .pipe(
      debounceTime(300), // espera 300ms depois da última tecla
      distinctUntilChanged(), // evita requisições se o valor não mudou
      switchMap(search => this.itemService.filterSearch(search)) // chama o serviço
    )
    .subscribe((result: ItemDto[]) => {
      this.dataSource = result;
    });
  }

  /*Search*/
  async submit() {
    const search = this.formSearch?.get('search')?.value;
    this.dataSource = await this.itemService.filterSearch(search);
  }

  //Menu
    menuOpen = false;
    //Register
    openCreateItemDialog() {
      const dialogRef = this.dialog.open(CreateItemFormComponent, {
        width: '400px',
        height: '300px',
      });

      /*Reload Table*/
      dialogRef.afterClosed().subscribe(async (result) => {
      this.dataSource = await this.itemService.findAll();
      });
    }

    openDeleteDialog(item : ItemDto){
      const dialogRef = this.dialog.open(DeleteItemFormComponent, {
        width: '400px',
        height: '180px',
        data: item
      });

      dialogRef.afterClosed().subscribe(async (result) => {
      this.dataSource = await this.itemService.findAll();
      });
    }
}