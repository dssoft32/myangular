import { Component, OnInit } from '@angular/core';
import { GlobalHttpService } from './../services/http.service';
import { userService } from './../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpService:GlobalHttpService,public userService:userService) { }

  ngOnInit() {
    this.getLead();
  }

  
  getLead() {
    this.httpService.getLead().subscribe(
      data => { 
      console.log(data);
      this.userService.users=data;
     },
       err => {
        console.log(err.message);
       },
        () => {
          console.log("Ajax done");
       }
       );
     }

}
