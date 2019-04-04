import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../Servicios/tweets.service';
import { Tweet } from '../model/tweet';
import { UserInformationService } from '../Servicios/user-information.service';

@Component({
  selector: 'app-insertar-tweet',
  templateUrl: './insertar-tweet.component.html',
  styleUrls: ['./insertar-tweet.component.css']
})
export class InsertarTweetComponent implements OnInit {
  miTweet: Tweet;
  name: String;
  constructor(private twServicio: TweetsService, private userInfo: UserInformationService) {
    this.miTweet = new Tweet();
    this.name = userInfo.getName();
    this.miTweet.username = userInfo.getUser().username;
   }

  ngOnInit() {
  }


  addNewTweet() {
    console.log("add tweet");
    this.twServicio.insertTweet(this.miTweet);
    this.miTweet = new Tweet();

    
  }
}
