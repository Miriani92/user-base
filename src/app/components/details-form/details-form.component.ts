import { Component, EventEmitter, Output } from '@angular/core';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
})
export class DetailsFormComponent {
  @Output() formSubmitEvent = new EventEmitter();
  onSubmit(user: UserData): void {
    this.formSubmitEvent.emit(user);
  }
}
