import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from "../registration/registration.service";
import {Router} from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  private users: any;

  constructor(
    private formBuilder: FormBuilder,
    private registration: RegistrationService,
    private route:Router,
    private localstorage:LocalStorage
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['knageswar888@gmail.com', [Validators.required,Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      password: ['nag007', [Validators.required, Validators.minLength(6)]]
    });

    ///////////////////////




  }
  get f() { return this.loginForm.controls; }

  onSubmit(formdata) {
    this.submitted = true;
    if (this.loginForm.invalid) {    // stop here if form is invalid
      return;
    }
    else {
      this.validation(formdata)
    }
  }

  validation(formdata) {
    let email = formdata.email
    this.registration.get_user_email(email).subscribe((responce) => {
        this.users = responce
      console.log("email",responce)
        this.localstorage.setItem('user',  this.users).subscribe(() => {});

        if (this.users) {
          console.log("-------------",this.users[0].email,"---",this.users[0].password)
          if ((formdata.email == this.users[0].email) && (formdata.password == this.users[0].password)) {
            this.route.navigate(['/restaurants'])
          }
        else {
          alert("failed")
          }
        }
      }, () => {
      },
      () => {
      });
  }

////////////////////////////

  //dropdownList = [];
  //dropdownSettings = {};



}
