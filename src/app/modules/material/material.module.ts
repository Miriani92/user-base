import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

const material = [MatDialogModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
