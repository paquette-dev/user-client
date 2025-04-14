import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: UserCreateComponent },
  { path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
