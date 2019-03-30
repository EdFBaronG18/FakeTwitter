import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private username: String;
  private gusto: String;
  //private username: String;


  constructor(private http: HttpClient) { 
    this.username = "not_user";
  }

  autenticateUser(username: String, password: String){
    if(username == "Alex_gal" && password == "111111"){
      return{
        message: 'Login succesfull',
        user: {
          username: 'Alex_gal',
          gusto: 'Gatos'
        }
      };
    }
    else{
      return{
        message: 'Login failed',
        user: {
          username: '',
          gusto: ''
        }
      };
    }
  }

  fillUserInfo(username: String, gusto: String){
    this.username = username;
    this.gusto = gusto;
  }

  logout(){
    this.username = '';
    this.gusto = '';
  }


  getUsername(){
    return this.username;
  }

  getGusto(){
    return this.gusto;
  }


  autenticate(username: String, password: String) {
    //console.log("EL TWEET A INSERTAR:", tweet);

    const body = new HttpParams()
      .set("username", username + "")
      .set("password", password + "");

    return this.http.post(environment.urlAutenticate, body).subscribe();
  }


}
