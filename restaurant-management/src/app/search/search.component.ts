import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  userFilter: any = { name: '' };


  constructor() { }

  ngOnInit() {
  }

}
