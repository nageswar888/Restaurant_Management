/*
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { RestaurantListService} from "../restaurants-list/restaurant-list.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  p: number = 1;
  collection: any[]
  public Restaurants: any;


  restaurants: any[] = [ {id:1, img:'img1', name:'Restaurant1', rating:'0', location:'jntu' },
    {id:2, img:'img2', name:'Restaurant2', rating:'0', location:'hitech city'},
    {id:3, img:'img3', name:'Restaurant3', rating:'0', location:'kukatpally'}];

  userFilter: any = { Name: '',Location:''};

  constructor(private router:Router,
              private restaurantListService:RestaurantListService) { }

  ngOnInit() {
    this.getRestaurants()
  }

  navigate(value){
    this.router.navigate(['/book',value])
  }

  getRestaurants(){
    this.restaurantListService.getRestaurants().subscribe( responce => {
      //console.log(responce.rows)
        this.Restaurants = responce.rows
    })
  }


}
*/

import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { RestaurantListService} from "../restaurants-list/restaurant-list.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  p: number = 1;
  collection: any[]
  public Restaurants: any;


  restaurants: any[] = [ {id:1, img:'<img src="assets/images/download.jpeg">', name:'Restaurant1', rating:'0', location:'jntu' },
    {id:2, img:'img2', name:'Restaurant2', rating:'0', location:'hitech city'},
    {id:3, img:'img3', name:'Restaurant3', rating:'0', location:'kukatpally'}];

  userFilter: any = { Name: '',Location:''};

  constructor(private router:Router,
              private restaurantListService:RestaurantListService) { }

  ngOnInit() {
    this.getRestaurants()
  }

  navigate(value){
    this.router.navigate(['/book',value])
  }

  getRestaurants(){
    this.restaurantListService.getRestaurants().subscribe( responce => {
      //console.log(responce.rows)
      this.Restaurants = responce.rows
    })
  }


}
