import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() buttonTitle: string = '';
  @Input() filterTitle: string = '';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
