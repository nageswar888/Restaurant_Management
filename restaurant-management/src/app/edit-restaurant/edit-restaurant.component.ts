import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantListService} from "../restaurants-list/restaurant-list.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  public restaurantForm:FormGroup;
  public submitted = false;
  private sub: any;
  private id: number;
  public restaurant: any;
  public Cuisines: any;


  constructor( private formBuilder: FormBuilder,
               private ResService: RestaurantListService,
               private router:ActivatedRoute,
               private Route : Router) {

    this.getId()
    this.getRestaurant(this.id)

  }

  ngOnInit() {
    //this.getCuisines()
    this.restaurantForm = this.formBuilder.group({
        Name: [null, Validators.required],
        Location: [null, Validators.required],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        email: [null, [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
        type: [null, Validators.required],
        address: [null, Validators.required],
        cost: [null, Validators.required],
        amenities: [null, Validators.required],
        about: [null, Validators.required]
        //Cuisine: [null, Validators.required]

        //image: []
      });
  }

  getId(){
    this.sub = this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      //console.log("id",this.id)
    });
  }

  get f() { return this.restaurantForm.controls; }

  onSubmit(formdata) {
    this.submitted = true;

    if (this.restaurantForm.invalid) {
      return;
    }
    this.updateRestaurant(formdata,this.id)
    //this.Route.navigate(['/restaurants-list'])
    }

  updateRestaurant(data,id){
    console.log("-----------data",data)
    return this.ResService.updateRestaurant(data,id).subscribe((responce) =>{
      console.log("res update",responce)
     /* data.RId = responce[1].id
      console.log(data.RId)
      this.ResService.addRestCuisine(data).subscribe( (res) => {
        console.log("res--->",res)
      })*/
    })
  }

    getRestaurant(id){
    this.ResService.getRes(id).subscribe( (responce) =>{
      this.restaurant= responce
      console.log("--",this.restaurant)

      this.restaurantForm.setValue({
        Name: this.restaurant[0].Name,
        Location: this.restaurant[0].Location,
        phone: this.restaurant[0].phone,
        email: this.restaurant[0].email,
        type: this.restaurant[0].type,
        address: this.restaurant[0].address,
        cost: this.restaurant[0].cost,
        amenities: this.restaurant[0].amenities,
        about: this.restaurant[0].about
        //Cuisine: this.restaurant[0].Cuisines
      })
    })
  }

  //add Cuisine
  getCuisines(){
    this.ResService.getCuisine().subscribe((responce) =>{
      this.Cuisines = responce
      //console.log(this.Cuisines)
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
