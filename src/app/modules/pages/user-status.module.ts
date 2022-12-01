import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from 'src/app/components/shared/filter/filter.component';
import { UserStatusComponent } from 'src/app/pages/user-status/user-status.component';
import { UserBaseService } from 'src/app/services/user-base.service';

@NgModule({
  declarations: [UserStatusComponent, FilterComponent],
  imports: [CommonModule, FormsModule],
  providers: [UserBaseService],
  exports: [UserStatusComponent],
})
export class UserStatusModule {}
