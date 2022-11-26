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

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UserStatusComponent,
    UserListComponent,
    DetailsComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
