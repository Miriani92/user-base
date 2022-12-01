import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from 'src/app/pages/details/details.component';
import { DetailsFormComponent } from 'src/app/components/details-form/details-form.component';
import { FormsModule } from '@angular/forms';
import { UserBaseService } from 'src/app/services/user-base.service';

@NgModule({
  declarations: [DetailsComponent, DetailsFormComponent],
  imports: [CommonModule, FormsModule],
  providers: [UserBaseService],
  exports: [DetailsComponent],
})
export class UserDetailsModule {}
