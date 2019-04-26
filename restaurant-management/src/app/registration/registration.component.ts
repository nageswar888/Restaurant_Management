import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { RegService } from '../reg.service';
import { RegistrationService } from "./registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  private formdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private Registration:RegistrationService

  ) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['nageswar', Validators.required],
      lastName: ['koppula', Validators.required],
      phone: ['9951506361', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['knageswar888@gmail.com', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      address: ['Hyd', Validators.required],
      role: ['admin', Validators.required],
      password: ['nag007', [Validators.required, Validators.minLength(6)]],
      //cpassword: ['nag007', Validators.required]
    });

    }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  submit(data) {
    this.submitted = true;
    //console.log(data)
    this.formdata = data
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{
      this.post_user(this.formdata)
    }
  }
  post_user(formdata){
    console.log(formdata)
    this.Registration.PostUser(formdata).subscribe( (responce) => {
      console.log("---------responce in ts",responce)
    })
  }


  retrive(){
    this.Registration.getting().subscribe( (responce) =>{
      console.log("----------getting",responce)
    })
  }
}
