import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  @Input() isModalOpen: boolean = false;
  @Input() title: string = '';

  @Output() closeModal:EventEmitter<any> = new EventEmitter<any>();
  @Output() submitModal: EventEmitter<any> = new EventEmitter<any>();

  modalForm:FormGroup;

  constructor() {}

  ngOnInit():void {
  }

  onSubmit() {
    this.submitModal.emit();
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
