import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { DetailsComponent } from './pages/details/details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserStatusComponent } from './pages/user-status/user-status.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'userstatus', component: UserStatusComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/userstatus', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
