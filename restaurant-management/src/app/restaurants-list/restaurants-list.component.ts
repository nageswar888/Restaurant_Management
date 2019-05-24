import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantListService } from "./restaurant-list.service";
import { Router} from "@angular/router";
import {NgFlashMessageService} from "ng-flash-messages";

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  public restaurantForm:FormGroup;

  public view_res: boolean = true;
  public add_res: boolean ;
  public submitted = false;
  public getRestaurants: any;
  public img: any;
  public delete_alert: boolean=false;
  public Cuisines

  add_restaurants(){
    this.add_res= true;
    this.view_res=false;
  }

  view_restaurants(){
    this.add_res= false;
    this.view_res=true;
  }


  constructor(
    private formBuilder: FormBuilder,
    private restaurant:RestaurantListService,
    private router:Router,
    private ngflashmsg: NgFlashMessageService
  ) { }

  ngOnInit() {

    this.get_restaurants();
    this.getCuisines()

    this.restaurantForm = this.formBuilder.group({
      Name: ['yuy', Validators.required],
      Location: ['yujh', Validators.required],
      phone: ['9951506361', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['ytygh@gmail.com', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      type: ['3 star', Validators.required],
      address: ['kukatpally, Hyderabad 500085', Validators.required],
      Cuisine: [null, Validators.required],
      cost: [1000, Validators.required],
      amenities: ['cards accepted', Validators.required],
      about: ['gd restaurant', Validators.required]
    });
    }

  get f() { return this.restaurantForm.controls; }


  onSubmit(formdata) {
    this.submitted = true;
    if (this.restaurantForm.invalid) {
      return;
    }
    else{
      //formdata.image = this.img
      this.post_restaurants(formdata)
      this.view_restaurants()
     console.log(formdata)
    }
  }

  get_restaurants(){
    this.restaurant.getRestaurants().subscribe((responce) => {
      this.getRestaurants = responce.rows //this.imageser = atob(this.getRestaurants[0].image.data)
    }, () => {})
  }

  post_restaurants(formdata){
    //console.log("---------form data",formdata)
    this.restaurant.postRestaurants(formdata).subscribe((responce) => {
      console.log("responce getting---------",responce)
      formdata.RId = responce.id
      this.restaurant.addRestCuisine(formdata).subscribe( (res) => {
        console.log("res--->",res)
        this.get_restaurants()
      })
    }, () => {})
  }

 /* changeListener($event) : void {
    this.readThis($event.target);
    //console.log("---",$event.target)
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.img = myReader.result;
    }
    myReader.readAsDataURL(file);
  }*/


  deleteRestaurants(value){
    this.delete_alert=true
     this.restaurant.deleteRestaurant(value).subscribe( (responce) =>{
       console.log("delete responce",responce)
       this.get_restaurants()

       this.ngflashmsg.showFlashMessage({
         messages: ['<b>deleted successfully</b>'],
         timeout : 2000,
         dismissible: true,
         type: 'success'
       });
     })
  }

  editRestaurant(value){
   this.router.navigate(['/edit-restaurant', value])
  }

  //add Cuisine
  getCuisines(){
    this.restaurant.getCuisine().subscribe((responce) =>{
      this.Cuisines = responce
    })
  }

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'Type',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

}
