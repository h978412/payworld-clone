import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authicatedUser : AuthenticationService,
    private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.authicatedUser.getUserId());
    //this.fetchUser();
  }

 fetchUser(){
   this.http.get(`http://localhost:8000/api/dashboard/${this.authicatedUser.getUserId()}`).subscribe(
     responseData =>{
       console.log(responseData);
     }
   )

 }

}
