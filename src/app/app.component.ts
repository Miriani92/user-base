import { Component, OnInit } from '@angular/core';
import { UserBaseService } from './services/user-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserBaseService) {}
  ngOnInit(): void {
    this.userService.getUserList().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
