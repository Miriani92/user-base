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
import { FilterComponent } from './components/shared/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsModule } from './modules/pages/user-details.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UserStatusComponent,
    UserListComponent,
    NavbarComponent,
    NotFoundComponent,
    FilterComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    UserDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
