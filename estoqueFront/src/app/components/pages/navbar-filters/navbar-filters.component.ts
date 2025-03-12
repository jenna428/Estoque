import { Component, OnInit } from '@angular/core';
import { CreateItemFormComponent } from '../../create-item-form/create-item-form.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateDepartamentoFormComponent } from '../../create-departamento-form/create-departamento-form.component';
import { CreateTipoitemFormComponent } from '../../create-tipoitem-form/create-tipoitem-form.component';

@Component({
  selector: 'app-navbar-filters',
  templateUrl: './navbar-filters.component.html',
  styleUrls: ['./navbar-filters.component.css']
})
export class NavbarFiltersComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    
  }

  //Menu
  menuOpen = false;
  
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  //cadastrar
  openCreateItemDialog() {
    this.dialog.open(CreateItemFormComponent, {
      width: '400px',
      height: '400px',
    })
  }

  openCreateDepartamentoDialog() {
    this.dialog.open(CreateDepartamentoFormComponent, {
      width: '400px',
      height: '250px',
    })
  } 

  openCreateTipoItemDialog(){
    this.dialog.open(CreateTipoitemFormComponent, {
      width: '400px',
      height: '250px',
    })
  } 

  /*
  toggleMenu(): void {
    const menu = document.getElementById('adds') as HTMLElement;
    const button = document.getElementById('add') as HTMLElement;
    
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }*/
}
