import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { USERS } from '../../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = USERS;
  getUsers(): void {
    this.usersAPI.getInfo().subscribe((users) => {
      this.users = users;
      this.users = this.usersAPI.chunkArray(this.users, 4);
    });
  }
  constructor(private usersAPI: UsersService) { }
  ngOnInit() {
    this.getUsers();
  }
}
