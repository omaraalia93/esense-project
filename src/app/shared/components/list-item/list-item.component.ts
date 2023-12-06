import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserData } from 'src/app/modules/system-settings/models/user-data.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item:IUserData;
  @Output() edit:EventEmitter<IUserData>;
  @Output() delete:EventEmitter<IUserData>;

  constructor(){
    this.edit =  new EventEmitter<IUserData>();
    this.delete =  new EventEmitter<IUserData>();
  }

  editClick():void {
    this.edit.emit(this.item);
  }

  deleteClick():void {
    this.delete.emit(this.item);
  }
}
