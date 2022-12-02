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
  public users = {};
  ngOnInit(): void {
    this.userService.getUserList().subscribe({
      next: (response) => {
        this.users = response;
        console.log(this.users);
      },
    });
  }

  onFilterUserList(filterForm: NgForm): any {
    const filterString = filterForm.value;
    this.userService.filterUserList(filterString).subscribe({
      next: (response) => {
        this.users = response;
      },
    });
    filterForm.reset();
  }
}
