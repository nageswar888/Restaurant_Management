import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  view_res: boolean;
  delet_res: boolean;
  add_res: boolean;
  edit_res: boolean;
  restaurantForm:FormGroup;
  submitted = false;


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
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
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

}
