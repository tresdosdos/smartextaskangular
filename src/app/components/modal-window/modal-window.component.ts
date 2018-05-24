import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { USERS } from '../../users';
import User from '../../user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  id: number;
  user: User;
  users: User[];
  getId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  getUsers(): void {
    this.usersAPI.getInfo().subscribe(users => {
      this.users = users;
      this.user = this.users[this.id - 1];
    });
  }
  constructor(private route: ActivatedRoute,
              private usersAPI: UsersService) { }
  ngOnInit() {
    this.getId();
    this.getUsers();
  }

}
