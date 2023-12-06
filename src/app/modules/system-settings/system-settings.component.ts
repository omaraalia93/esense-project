import { Component } from '@angular/core';
import { menuItems } from './consts/menu-items';
import { MenuItem } from 'src/app/shared/models/side-nav.model';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent {
  items:MenuItem[];

  constructor() {
    this.items = menuItems
  }
}
