import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My first app';
  options: any;
  users: any[] = [];

  constructor(private userService: UserService){
    this.options = {
      fileName: 'Users',
      columns: [
        {
          title: 'Id'
        },
        {
          title: 'First Name',
          name: ''
        },
        {
          title: 'Last Name',
          name: ''
        },
        {
          title: 'Action',
          name: ''
        }
      ]
    }
  }
  
  getUser() {
    this.userService.getUser({ key: '1' }).subscribe(result => {
      this.users = result.data || [];
    })
  }

  ngOnInit(){
    this.getUser();
  }
  
  
}
