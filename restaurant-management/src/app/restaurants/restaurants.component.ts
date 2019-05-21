import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  p: number = 1;
  collection: any[]

  restaurants: any[] = [ {id:1, img:'img1', name:'Restaurant1', rating:'0', location:'jntu' },
    {id:2, img:'img2', name:'Restaurant2', rating:'0', location:'hitech city'},
    {id:3, img:'img3', name:'Restaurant3', rating:'0', location:'kukatpally'}];

  userFilter: any = { name: '',rating:'' ,location:''};

  constructor(private router:Router) { }

  ngOnInit() {
  }

  book(value){
    this.router.navigate(['/book',value])
  }


}
