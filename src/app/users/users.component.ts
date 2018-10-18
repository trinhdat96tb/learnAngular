import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  user: any = {};
  createdUser: any = {};

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser({ key: '1' }).subscribe(result => {
      this.users = result.data || [];
    })
  }

  editUser(user, i) {
    this.user = _.clone(user);
    this.user.index = i;
  }

  deleteUser(i) {
    let id = this.users[i].id;
    this.userService.deleteUser(id).subscribe(result => {
      
    })
  }

  ok(type) {
    if (type === 'update') {
      this.userService.editUser(this.user).subscribe(result => {
        alert('Edit successful');
        this.users[this.user.index] = result;
      })
    } else {
      this.userService.createUser(this.createdUser).subscribe(result => {
        if(result) {
          this.users.push(result);
          alert('insert success')
        }
      })
    }
  }

}
