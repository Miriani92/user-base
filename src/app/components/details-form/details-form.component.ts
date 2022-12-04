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
  onSubmit(userForm: NgForm): void {
    const user = userForm.value;
    this.formSubmitEvent.emit(user);
    userForm.reset();
  }
}
