import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserTableComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class UserModule {}
