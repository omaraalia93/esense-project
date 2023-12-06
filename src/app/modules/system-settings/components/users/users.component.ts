import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/users-service.service';
import { IUserData } from '../../models/user-data.model';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from 'src/app/core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit,OnDestroy{
  userAddEditModalOpen:boolean;
  userAlertModalOpen:boolean;
  modalTitle:string;

  userData: IUserData[];

  selectedUserItem:IUserData | null;
  selectedUserItemStatus:string;

  searchQuery:string;

  userDataSubscription:Subscription;

  constructor(
    private userService: UserService,
    private translateService:TranslateService,
    private languageService:LanguageService,
    private toastrService:ToastrService
  ) {
    this.userData = [];
    this.selectedUserItemStatus = "";
   }

  ngOnInit(): void {
    this.userDataSubscription = this.userService.getData().subscribe({
      next:res => {
        this.userData = [...res];
      },
      error:error => {
        this._showSuccessToast(error);
      }
    })
  }

  ngOnDestroy():void {
    if(this.userDataSubscription){
      this.userDataSubscription.unsubscribe();
    }
  }

  onSearch(): void {
    this.userService.searchByName(this.searchQuery);
  }

  addName():void {
    this.modalTitle = "system_settings.users.add_name";
    this.userAddEditModalOpen = true;
    this.selectedUserItemStatus = "add";
  }
  editName(item:IUserData):void {
    this.modalTitle = "system_settings.users.edit_name";
    this.userAddEditModalOpen = true;
    this.selectedUserItem = item;
    this.selectedUserItemStatus = "edit";
  }
  deleteName(item:IUserData):void {
    this.modalTitle = "system_settings.users.delete_name";
    this.userAlertModalOpen = true;
    this.selectedUserItem = item;
  }

  submitAddEditModal(value):void {
    if(this.selectedUserItemStatus ==="add"){
      this.userService.addData(value);
      this._showSuccessToast(this.translateService.instant("toastr_message.name_added_successfully"));
    }

    if(this.selectedUserItemStatus ==="edit"){
      this.userService.updateData(this.selectedUserItem.id,value);
      this._showSuccessToast(this.translateService.instant("toastr_message.name_update_successfully"));
    }
  }
  closeAddEditModal():void {
    this.userAddEditModalOpen = false;
    this.selectedUserItem = null;
  }
  
  submitUserAlertModal():void {
    this.userService.deleteData(this.selectedUserItem.id);
    this._showSuccessToast(this.translateService.instant("toastr_message.name_deleted_successfully"));
  }
  closeUserAlertModal():void {
    this.userAlertModalOpen = false;
    this.selectedUserItem = null;
  }

  private _showSuccessToast(message:string){
    this.toastrService.success(message,'', {
      positionClass: this.languageService.getCurrentLanguage() === "en" 
      ? 'toast-bottom-right' 
      : "toast-bottom-left"
    })
  }
  private _showErrorToast(message:string){
    this.toastrService.success(message,'', {
      positionClass: this.languageService.getCurrentLanguage() === "en" 
      ? 'toast-bottom-right' 
      : "toast-bottom-left"
    })
  }
}
