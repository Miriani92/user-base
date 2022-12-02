import { Component, EventEmitter, Output } from '@angular/core';
//import { UserData } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
})
export class DetailsFormComponent {
  @Output() formSubmitEvent = new EventEmitter();
  onSubmit(userForm: NgForm): void {
    const user = userForm.value;
    this.formSubmitEvent.emit(user);
    userForm.reset();
  }
}
