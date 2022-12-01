import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserBaseService) {}
  ngOnInit(): void {
    this.userService.getUserList().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
