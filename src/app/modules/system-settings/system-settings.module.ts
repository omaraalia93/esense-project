import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { SystemSettingsComponent } from './system-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './components/users/users.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModalComponent } from './components/user-modal/user-modal.component';


@NgModule({
  declarations: [
    SystemSettingsComponent,
    UsersComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
    ReactiveFormsModule
  ]
})
export class SystemSettingsModule { }
