import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserBaseService) {}
  public users: any[] = [];
  ngOnInit(): void {
    this.userService.getUserList().subscribe({
      next: (res) => {
        const { usersList }: any = res;
        this.users = usersList;
      },
    });
  }

  onFilterUserList(filterForm: NgForm): any {
    const filterString = filterForm.value;
    this.userService.filterUserList(filterString).subscribe({
      next: (res) => {
        const { filterdUsersList }: any = res;
        this.users = filterdUsersList;
      },
    });
    filterForm.reset();
  }

  onDeleteUser(id: string): any {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        const { updatedUsers }: any = res;
        this.users = updatedUsers;
      },
    });
  }
}
