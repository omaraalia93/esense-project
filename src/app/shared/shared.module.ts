import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    SideNavComponent,
    ListItemComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,RouterModule,TranslateModule,ScrollingModule,FormsModule
  ],
  exports: [
    SideNavComponent,
    ListItemComponent,
    ScrollingModule,
    FormsModule,
    AlertModalComponent
  ]
})
export class SharedModule { }
