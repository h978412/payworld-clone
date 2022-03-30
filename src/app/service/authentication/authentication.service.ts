import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { HttpClient } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser = new SignInData('piku@gmail.com', 'test123');
  isAuthenticated = false;
  private user_id? : number;

  constructor(private router: Router,
    private http : HttpClient) { }
  authenticate(signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.http.get<number>(`http://localhost:8000/api/${signInData.getEmail()}`).subscribe(
        user =>{
          this.user_id = user;
          console.log(this.user_id);
        }
      )
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }
  private checkCredentials(signInData: SignInData): boolean{
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());

  }
  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  public getUserId(){
    return this.user_id;
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

}
