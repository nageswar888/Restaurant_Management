import { Component, OnInit } from '@angular/core';
import { RestaurantListService} from "../restaurants-list/restaurant-list.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public id: number;
  public Restaurant: any;
  //public date: Date


  date: Date = new Date();
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }


  constructor(private restaurantListService:RestaurantListService,
              private route:ActivatedRoute) {  //this.date = new Date()
     }

  ngOnInit() {
    this.getId()
    this.getRestaurant(this.id)
  }

  getId(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  getRestaurant(id){
    this.restaurantListService.getRes(id).subscribe( response => {
      console.log("responce",response)
      this.Restaurant = response
    })
  }

}
