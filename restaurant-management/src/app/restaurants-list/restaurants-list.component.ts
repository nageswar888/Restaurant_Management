import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantListService } from "./restaurant-list.service";


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  public view_res: boolean;
  public delet_res: boolean;
  public add_res: boolean;
  public edit_res: boolean;
  public restaurantForm:FormGroup;
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
      Name: ['', Validators.required],
      Location: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      type: ['', Validators.required]
    });
    }

  get f() { return this.restaurantForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.restaurantForm.invalid) {
      return;
    }
  }

  get_restaurants(){
    this.restaurant.getRestaurants().subscribe((responce) => {
      this.getRestaurants = responce.rows
     /* console.log("--------restaurants",this.getRestaurants)*/
    }, () => {})
  }

}
