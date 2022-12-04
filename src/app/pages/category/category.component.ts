import { Component, OnInit } from '@angular/core';
import { UserBaseService } from 'src/app/services/user-base.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { Category } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

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
  openDialog(category?: object) {
    let edit;
    let buttonText;
    if (category) {
      buttonText = 'Save Edit';
      edit = this.onEditCategory;
    } else {
      buttonText = 'Add';
      edit = this.onAddCategory;
    }

    this.dialog.open(DialogComponent, {
      data: {
        ...category,
        category: category,
        buttonTitle: buttonText,
        input: true,
        edit,
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
  onDeleteCategory(id: string) {
    this.userService.deleteCategory(id).subscribe({
      next: (res) => {
        location.reload();
      },
    });
  }

  onAddCategory(category: any) {
    console.log(category);
    this.userService.addCategory(category).subscribe({
      next: (res) => {
        const { updatedCategories }: any = res;
        this.categories = updatedCategories;
        location.reload();
      },
    });
  }

  filterCategories(categoryForm: NgForm) {
    this.userService.fitlerCategories(categoryForm.value).subscribe({
      next: (res: any) => {
        const { filterdCategoryList }: any = res;
        this.categories = filterdCategoryList;
        categoryForm.reset();
      },
    });
  }
}
