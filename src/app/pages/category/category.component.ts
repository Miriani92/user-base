import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { Category } from 'src/app/models/user.model';
import { OnChanges } from '@angular/core';
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
        edit: this.onEditCategory,
      },
    });
  }
  onEditCategory(editedCategory: Category) {
    this.userService.editCategory(editedCategory).subscribe({
      next: (res) => {
        const { updatedCategories }: any = res;
        this.categories = updatedCategories;
        location.reload();
      },
    });
  }
}
