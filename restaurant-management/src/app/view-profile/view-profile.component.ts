import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  public loggedUser: any;

  constructor( private localstorage: LocalStorage) { }

  ngOnInit() {
    this.localstorage.getItem('user').subscribe((user) => {
      //console.log("-------local storage",user)
      this.loggedUser = user
      //console.log(this.loggedUser[0].firstName)
    });
  }

}
