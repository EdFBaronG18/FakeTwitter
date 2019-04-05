import { Component, Input } from '@angular/core';
import { UserInformationService } from './Servicios/user-information.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyTwitter';
  check: boolean;
  constructor(private userInfo: UserInformationService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('es');
    //let browserLang = this.translate.getBrowserLang();
    //this.translate.use(browserLang);

  }

  changeLanguage(){
    if(this.check)
      this.translate.setDefaultLang('en');
    else
      this.translate.setDefaultLang('es');  
  }
  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }
}
