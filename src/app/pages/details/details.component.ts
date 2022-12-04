import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/user.model';
import { UserBaseService } from 'src/app/services/user-base.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public currentUser: any;
  public userID: any;
  constructor(
    private userService: UserBaseService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userID = this.activeRoute.snapshot.paramMap.get('id');
    if (!this.userID) return;
    this.userService.getUser(this.userID).subscribe({
      next: (res) => {
        const { user }: any = res;
        console.log(user);
        this.currentUser = user;
      },
    });
  }
  onAddUser(user: UserData): void {
    this.userService.addUser(user);
  }
}
