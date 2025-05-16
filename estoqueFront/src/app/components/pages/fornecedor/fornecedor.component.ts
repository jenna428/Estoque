import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FornecedorDto } from 'src/app/dto/fornecedor.dto';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { CreateFornecedorFormComponent } from '../../create-fornecedor-form/create-fornecedor-form.component';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

formSearch: FormGroup;
    
  displayedColumns: string[] = ['nome', 'id'];
  dataSource: FornecedorDto[] = [];
  constructor(
      private readonly fornecedorService: FornecedorService,
      private readonly fb: FormBuilder,
      private readonly dialog: MatDialog,
    ) {
      this.formSearch = this.fb.group({
        search: ['', [Validators.required]],
        submit: ['']
      })
    }

    async ngOnInit() {
      this.dataSource = await this.fornecedorService.findAll()
      console.log('data:', this.dataSource);
    }

    openCreateFornecedorDialog() {
        this.dialog.open(CreateFornecedorFormComponent, {
          width: '400px',
          height: '400px',
        })
    }
}
