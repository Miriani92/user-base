import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBaseService } from 'src/app/services/user-base.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() buttonTitle: string = '';
  @Input() input: boolean = false;
  @Input() categoryTitle: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserBaseService
  ) {}
  ngOnInit(): void {
    this.buttonTitle = this.data.buttonTitle;
    this.input = this.data.input;
    this.categoryTitle = this.data.categoryTitle;
  }
  onEdit(inputForm: NgForm) {}
}
