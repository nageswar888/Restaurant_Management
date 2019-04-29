import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantListService } from "./restaurant-list.service";
import {v} from "@angular/core/src/render3";


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  public restaurantForm:FormGroup;
  public deleteForm:FormGroup

  public view_res: boolean;
  public delet_res: boolean;
  public add_res: boolean;
  public edit_res: boolean;
  public submitted = false;
  public getRestaurants: any;

  add_restaurants(){
    this.add_res= true;
    this.delet_res = false;
    this.edit_res= false;
    this.view_res=false;
  }

  view_restaurants(){
    this.add_res= false;
    this.delet_res = false;
    this.edit_res= false;
    this.view_res=true;
  }

  delete_restaurants(){
    this.add_res= false;
    this.delet_res = true;
    this.edit_res= false;
    this.view_res=false;
  }

  edit_restaurants(){
    this.add_res= false;
    this.delet_res = false;
    this.edit_res= true;
    this.view_res=false;
  }

  rest_delete(){
    alert("deleted");
  }
  constructor(
    private formBuilder: FormBuilder,
    private restaurant:RestaurantListService
  ) { }

  ngOnInit() {
    this.get_restaurants()

    this.restaurantForm = this.formBuilder.group({
      Name: ['yuy', Validators.required],
      Location: ['yujh', Validators.required],
      phone: ['9951506361', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['ytygh@gsfg.com', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      type: ['3 star', Validators.required],
      cuisine: [''],
      image: ['']
    });
    }

  get f() { return this.restaurantForm.controls; }


  onSubmit(formdata) {
    this.submitted = true;

    if (this.restaurantForm.invalid) {
      return;
    }
    else{
      this.post_restaurants(formdata)
    }
  }

  get_restaurants(){
    this.restaurant.getRestaurants().subscribe((responce) => {
      this.getRestaurants = responce.rows
     /* console.log("--------restaurants",this.getRestaurants)*/
    }, () => {})
  }

  post_restaurants(formdata){
    console.log("---------form data",formdata)
    this.restaurant.postRestaurants(formdata).subscribe((responce) => {
      console.log("--------restaurants",responce)
    }, () => {})
  }

  delete_Restaurants(value){
    alert(value)
   /* this.restaurant.postRestaurants(value).subscribe((responce) => {
      console.log("--------restaurants",responce)
    }, () => {})*/
  }
}
