import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any = [];
  title = 'pagination';
  page: any = 1;
  count: any = 0;
  tableSize: any = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private userService: UserBaseService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): any {
    this.userService.getUserList().subscribe({
      next: (res) => {
        const { usersList }: any = res;
        console.log(usersList);
        this.users = usersList;
      },
    });
  }
  onFilterUserList(filterForm: NgForm): any {
    const filterData = {
      ...filterForm.value,
      birthDate: this.datePipe.transform(
        filterForm.value.birthDate,
        'dd/MM/yyyy'
      ),
    };
    this.userService.filterUserList(filterData).subscribe({
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

  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }
  onTablesSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }
}
