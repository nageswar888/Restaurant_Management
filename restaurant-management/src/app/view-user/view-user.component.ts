import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../registration/registration.service";


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  public users: any;

  constructor(private Registration:RegistrationService) { }

  ngOnInit() {

      this.Registration.getting_user().subscribe( (responce) =>{
        console.log("----------getting",responce)
        this.users = responce.rows
      },() =>{},
        ()=>{})
    }


}
