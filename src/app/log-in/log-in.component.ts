import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../Servicios/user-information.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  private username: String;
  private password: String;
  private message : String;

  constructor(private servicioLogin: UserInformationService, private router: Router) { 
    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

  async login(){

    let responseAutentication: any = await this.servicioLogin.autenticate(this.username, this.password);
    //responseAutentication = responseAutentication[0];

    
    console.log(responseAutentication);
    
    if(responseAutentication
       != null){
        //let user = responseAutentication.user;
        //this.servicioLogin.fillUserInfo(user.username, user.gusto);
        this.router.navigateByUrl("/tweets");

    }
    else{
      this.message = "Usuario o contraseña incorrecta.";
    }
  }

}
