import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { Status } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
})
export class UserStatusComponent implements OnInit {
  constructor(private userService: UserBaseService, public dialog: MatDialog) {}

  public statuses: any = [];

  ngOnInit(): void {
    this.userService.getStatuses().subscribe({
      next: (res: any) => {
        const { statusList }: any = res;
        this.statuses = statusList;
      },
    });
  }
  openDialog(status?: object) {
    let edit;
    let buttonText;
    if (status) {
      buttonText = 'Save Edit';
      edit = this.onEditStatus;
    } else {
      buttonText = 'Add';
      edit = this.onAddStatus;
    }

    this.dialog.open(DialogComponent, {
      data: {
        ...status,
        status: status,
        buttonTitle: buttonText,
        input: true,
        edit,
      },
    });
  }
  onEditStatus(editedStatus: Status) {
    this.userService.editStatus(editedStatus).subscribe({
      next: (res) => {
        const { updatedStatuses }: any = res;
        this.statuses = updatedStatuses;
        location.reload();
      },
    });
  }
  onDeleteStatus(id: string) {
    this.userService.deleteStatus(id).subscribe({
      next: (res) => {
        location.reload();
      },
    });
  }

  onAddStatus(status: any) {
    this.userService.addStatus(status).subscribe({
      next: (res) => {
        const { updatedStatuses }: any = res;
        this.statuses = updatedStatuses;
        location.reload();
      },
    });
  }
}
