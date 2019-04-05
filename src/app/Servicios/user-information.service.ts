import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { User, Tweet } from '../model/tweet';

const TOKEN = "TOKEN";

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private user: User;
  
  //private username: String;


  constructor(private http: HttpClient) { 
    this.user = null;
  }

  getUser(): User{
    return this.user;
  }
  fillUserInfo(user: User){
    this.user = user;
  }

  getName(): String{
    return this.user.name;
  }
  logout(){
    this.user = null;
    localStorage.removeItem(TOKEN);
  }

  autenticate(username: String, password: String) {
    //console.log("EL TWEET A INSERTAR:", tweet);

    const body = new HttpParams()
      .set("username", username + "")
      .set("password", password + "");

    return this.http.post(environment.urlAutenticate, body);
  }

  getAllTweets(username: String): Observable<Tweet[]>{
    const body = new HttpParams()
      .set("username", username + "");
      return this.http.post<Tweet[]>(environment.urlGetUserTweets, body);
  }


  isLogged(){
    return localStorage.getItem(TOKEN) != null;
  }

  loggin(information: string){
    localStorage.setItem(TOKEN, information);
  }
}
