import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: any[] = [ { img:'img1', name:'Restaurant1', rating:'0', location:'jntu' },
    { img:'img2', name:'Restaurant2', rating:'0', location:'hitech city'},
    { img:'img3', name:'Restaurant3', rating:'0', location:'kukatpally'}];


  constructor() { }

  ngOnInit() {
  }
popup(){
    alert("div selected");
}



}
