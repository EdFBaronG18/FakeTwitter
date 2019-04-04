import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../Servicios/user-information.service';
import { Router } from '@angular/router';
import { User } from '../model/tweet';


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
    
    let responseAutentication: any;
    let user : User;
    this.servicioLogin.autenticate(this.username, this.password).subscribe(
      dataResponse => {
        responseAutentication = dataResponse;
          console.log(responseAutentication);
          user = <User>responseAutentication;

          if(user != null){
              this.servicioLogin.fillUserInfo(user);
              this.router.navigateByUrl("/tweets");
          }
          else
            this.message = "Usuario o contraseña incorrecta.";
      }, 
    );
  }

}
