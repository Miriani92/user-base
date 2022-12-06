import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const material = [MatDialogModule, MatIconModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
