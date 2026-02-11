import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemDto } from 'src/app/dto/item.dto';
import { ItemService } from 'src/app/service/item.service';


@Component({
  selector: 'app-delete-item-form',
  templateUrl: './delete-item-form.component.html',
  styleUrls: ['./delete-item-form.component.css']
})
export class DeleteItemFormComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: ItemDto, // ← item recebido
    private dialogRef: MatDialogRef<DeleteItemFormComponent>,
    private readonly itemService: ItemService,
  ) {
   }

  ngOnInit(): void {

  }

  deletar(){
    const id = this.item.id;
    this.itemService.delete(id);

    this.dialogRef.close();
  }

}
