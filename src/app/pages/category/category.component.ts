import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private userService: UserBaseService, public dialog: MatDialog) {}
  public categories: any = [];
  ngOnInit(): void {
    this.userService.getCategories().subscribe({
      next: (res: any) => {
        const { categoryList }: any = res;
        console.log(categoryList);
        this.categories = categoryList;
      },
    });
  }
  openDialog(category: object) {
    this.dialog.open(DialogComponent, {
      data: {
        ...category,
        category: category,
        buttonTitle: 'Save',
        input: true,
      },
    });
  }
}
