import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/side-nav.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() list:MenuItem[];
}