import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../Servicios/user-information.service';
import { User, Tweet } from '../model/tweet';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
    user: User;
    tweets: Array<Tweet>;
    constructor(infoUser: UserInformationService) {
      this.user = infoUser.getUser();
      this.tweets = new Array();


    infoUser.getAllTweets(this.user.username).subscribe(array =>{
        array.forEach(tweet =>{
          tweet.userTweet = this.user;
          tweet.dateTweet = new Date(tweet.dateTweet);
        })
        this.tweets = array;
      });
      

    }

  ngOnInit() {
  }

}
