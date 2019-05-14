import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantListService} from "../restaurants-list/restaurant-list.service";
import { ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import { LocalStorage } from '@ngx-pwa/local-storage';
import update from "@angular/cli/commands/update";


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


  constructor( private formBuilder: FormBuilder,
               private ResService: RestaurantListService,
               private router:ActivatedRoute) {

    this.getId()
    this.getRestaurant(this.id)
  }

  ngOnInit() {
     //console.log("11111",this.restaurant[0].Name)

      this.restaurantForm = this.formBuilder.group({
        Name: [null, Validators.required],
        Location: [null, Validators.required],
        phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
        email: [null, [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
        type: [null, Validators.required],
        cuisine: [''],
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
    console.log(formdata)
    //formdata.id= this.id
    this.updateRestaurant(formdata,this.id)
    }

  updateRestaurant(data,id){
    console.log("-----------",data)
    return this.ResService.updateRestaurant(data,id).subscribe((responce) =>{console.log("res update",responce)})
  }

    getRestaurant(id){
    this.ResService.getRes(id).subscribe( (responce) =>{
      this.restaurant= responce

      this.restaurantForm.setValue({
        Name: this.restaurant[0].Name,
        Location: this.restaurant[0].Location,
        phone: this.restaurant[0].phone,
        email: this.restaurant[0].email,
        type: this.restaurant[0].type,
        cuisine: this.restaurant[0].cuisine
      })
      //console.log("---",this.restaurant[0].Name)
    })

  }
}
