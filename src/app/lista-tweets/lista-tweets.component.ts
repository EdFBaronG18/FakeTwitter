import { Component, OnInit } from "@angular/core";
import { Tweet, User } from "../model/tweet";
import { Router } from '@angular/router';

import { TweetsService } from "../Servicios/tweets.service";
import { UserInformationService } from '../Servicios/user-information.service';

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

    twServicio.getAllTweets().subscribe(misTweetsObs => {
      console.log(misTweetsObs);

      // Create list for save users
      misTweetsObs.forEach(element => {
        if (typeof element.userTweet == "object")
          this.miUsers.set(element.userTweet.id, element.userTweet);
        else element.userTweet = this.miUsers.get(element.userTweet);
        element.dateTweet = new Date(element.dateTweet);
      });
      this.misTweets = misTweetsObs;
    });
  }

  addNewTweet() {
    console.log("add tweet");
    this.twServicio.insertTweet(this.miTweet);
    this.miTweet = new Tweet();
  }

  clickTweet(clicked: Tweet) {
    this.tweetClicked = clicked;
  }

  ngOnInit() {}
}
