import { Component, OnInit } from "@angular/core";
import { Tweet, User } from "../model/tweet";

import { TweetsService } from "../Servicios/tweets.service";
import { mixinColor } from '@angular/material';

@Component({
  selector: "app-lista-tweets",
  templateUrl: "./lista-tweets.component.html",
  styleUrls: ["./lista-tweets.component.css"]
})
export class ListaTweetsComponent implements OnInit {
  misTweets: Array<Tweet>;
  miTweet: Tweet;
  miUsers: Map<number, User>;
  tweetClicked: Tweet;

  constructor(private twServicio: TweetsService) {
    this.misTweets = new Array();
    this.miTweet = new Tweet();
    this.miUsers = new Map();
    //this.tweetClicked = this.miTweet;

    twServicio.getAllTweets().subscribe(misTweetsObs => {
      console.log(misTweetsObs);

      // Create list for save users
      misTweetsObs.forEach(element => {
        if(typeof element.userTweet == "object")
          this.miUsers.set(element.userTweet.id, element.userTweet);
        else
          element.userTweet = this.miUsers.get(element.userTweet);
        
      });
      this.misTweets = misTweetsObs;
    });
  }

  addNewTweet() {
    console.log("add tweet");
    this.twServicio.insertTweet(this.miTweet);
    //this.misTweets.push(this.miTweet);
    this.miTweet = new Tweet();
  }

  clickTweet(gg:Tweet) {
    this.tweetClicked = gg; 
  }
  
  ngOnInit() {}
}
