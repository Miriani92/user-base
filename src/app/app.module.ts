import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './pages/category/category.component';
import { UserStatusComponent } from './pages/user-status/user-status.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UserStatusComponent,
    UserListComponent,
    DetailsComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailsFormComponent,
    FilterComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
