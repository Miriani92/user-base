import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBaseService } from 'src/app/services/user-base.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public currentUser: any;
  public userID: any;
  public allCategories: any;
  public allStatuses: any;

  constructor(
    private userService: UserBaseService,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.userService.getCategories().subscribe({
      next: (res: any) => {
        const { categoryList }: any = res;
        this.allCategories = categoryList;
      },
    });
    this.userService.getStatuses().subscribe({
      next: (res: any) => {
        const { statusList }: any = res;
        this.allStatuses = statusList;
      },
    });
    this.userID = this.activeRoute.snapshot.paramMap.get('id');
    if (this.userID) {
      this.userService.getUser(this.userID).subscribe({
        next: (res) => {
          const { user }: any = res;
          const traformedDate = this.datePipe
            .transform(user.birthDate, 'yyyy/MM/dd')
            ?.replace(/[/]/g, '-');
          const userData = {
            ...user,
            birthDate: traformedDate,
          };
          this.currentUser = userData;
        },
      });
    }
  }
  onAddUser(user: any): void {
    if (user.edit) {
      this.userService.editUser(user).subscribe();
    } else {
      let { birthDate } = user.value;
      let userData = {
        ...user.value,
        birthDate: this.datePipe.transform(birthDate, 'dd/MM/yyyy'),
      };

      console.log(userData);
      this.userService.addUser(userData);
    }
  }
}
