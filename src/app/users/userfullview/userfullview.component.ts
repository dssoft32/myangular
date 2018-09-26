import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { GlobalHttpService } from './../../services/http.service';
import { userService } from './../../services/users.service';

@Component({
  selector: 'app-userfullview',
  templateUrl: './userfullview.component.html',
  styleUrls: ['./userfullview.component.css']
})
export class UserfullviewComponent implements OnInit {


  user={};

  constructor(
    private _router: Router,
      private httpService: GlobalHttpService,
      private route: ActivatedRoute,
      private userService:userService
  ) { 

    this.route.params.subscribe( params => this.getUser(params["username"]) );
  }

  ngOnInit() {
  }

  getUser(username){

    let el=this;

    for(let i=0;i<this.userService.users.length;i++){
if(el.userService.users[i]["username"]==username){
  this.user=el.userService.users[i];
}
    }
   

    console.log(this.user);

  }

}
