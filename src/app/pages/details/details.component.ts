import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/user.model';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private userService: UserBaseService) {}
  ngOnInit(): void {}

  onAddUser(user: UserData): void {
    this.userService.addUser(user);
  }
}
