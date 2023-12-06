import { Component, OnInit } from '@angular/core';
import { menuItems } from './consts/menu-items';
import { MenuItem } from 'src/app/shared/models/side-nav.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit {
  items:MenuItem[];

  constructor(private route:Router,private activatedRoute:ActivatedRoute) {
    this.items = menuItems
  }

  ngOnInit():void {
    this.route.navigate(['users'],{relativeTo:this.activatedRoute});
  }
}
