import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
})
export class DetailsFormComponent {
  @Output() formSubmitEvent = new EventEmitter();
  @Input() public user: any;
  @Input() public allCategories: any;
  @Input() public allStatuses: any;

  constructor() {}
  onSubmit(userForm: NgForm): void {
    let formValue;
    if (this.user) {
      formValue = {
        value: {
          ...this.user,
          ...userForm.value,
        },
        edit: true,
      };
    } else {
      formValue = {
        value: {
          ...userForm.value,
        },
        edit: false,
      };
    }
    this.formSubmitEvent.emit(formValue);
    userForm.reset();
  }
}
