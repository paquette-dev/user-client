import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  department: string;
  status: string;
}

const MOCK_USERS: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    username: 'johndoe',
    department: 'Engineering',
    status: 'Active',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    username: 'janesmith',
    department: 'Marketing',
    status: 'Active',
  },
  {
    firstName: 'Robert',
    lastName: 'Johnson',
    email: 'robert.johnson@company.com',
    username: 'rjohnson',
    department: 'Finance',
    status: 'Inactive',
  },
  {
    firstName: 'Emily',
    lastName: 'Williams',
    email: 'emily.williams@company.com',
    username: 'ewilliams',
    department: 'Human Resources',
    status: 'Active',
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@company.com',
    username: 'mbrown',
    department: 'Engineering',
    status: 'Active',
  },
  {
    firstName: 'Sarah',
    lastName: 'Davis',
    email: 'sarah.davis@company.com',
    username: 'sdavis',
    department: 'Sales',
    status: 'On Leave',
  },
  {
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@company.com',
    username: 'dmiller',
    department: 'IT Support',
    status: 'Active',
  },
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class UserTableComponent {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'username',
    'department',
    'status',
  ];
  dataSource = MOCK_USERS;
}
