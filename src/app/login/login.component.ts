import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { SignInData } from '../model/signInData';
import {Router} from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   isFormInvalid  = false;
   areCredentialInvalid = false;
   isEmail = false;
   isPassword = false;
   isDisabled = false;

  constructor(private authenticationService: AuthenticationService,
    private router : Router,
    private http : HttpClient) {}

  ngOnInit(): void {
  }

  onInput(signInData: NgForm){
   let email  = signInData.value.email;
   if(email.indexOf('@')<1||email.indexOf('@')>email.indexOf('.')||email.indexOf('@')==-1){
      this.isEmail = false;
   }else{
     this.isEmail = true;
   }
   let password = signInData.value.password;
   if(password.length<7){
     this.isPassword = false;
   }else{
     this.isPassword = true;
   }
   this.isDisabled = this.isEmail&&this.isPassword;
  }

  onSubmit(signInForm: NgForm){
    
    if(!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialInvalid = false;
      return;

    }
     this.checkCredentials(signInForm);
    // this.http.get(`http://localhost:8000/api/${signInForm.value.email}`).subscribe(
    //   responseData =>{
    //     console.log(responseData)
    //   }
    //)
    
  }
  private checkCredentials(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){
      this.isFormInvalid = false;
      this.areCredentialInvalid = true;
    }
  }

  redirectSignUp(){

    this.router.navigateByUrl('/register');

}

}
