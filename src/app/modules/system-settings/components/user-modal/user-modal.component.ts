import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserData } from '../../models/user-data.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  @Input() title: string;
  @Input() isModalOpen: boolean = false;
  @Input() editItem:IUserData;

  @Output() closeModal:EventEmitter<any> = new EventEmitter<any>();
  @Output() submitModal: EventEmitter<any> = new EventEmitter<any>();

  modalForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit():void {
    this.formInit(this.formBuilder);
  }

  formInit(fb:FormBuilder){
    if(!this.editItem){
      this.modalForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        details: ['']
      });
    }else {
      this.modalForm = this.formBuilder.group({
        name: [this.editItem.name, [Validators.required]],
        details: [this.editItem.details]
      });
    }
  }

  onSubmit() {
    this.submitModal.emit(this.modalForm.value);
    this.modalForm.reset();
    this.close();
  }
  
  close() {
    this.closeModal.emit();
  }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    if (target.classList.contains('modal-overlay')) {
      this.close();
    }
  }
}
