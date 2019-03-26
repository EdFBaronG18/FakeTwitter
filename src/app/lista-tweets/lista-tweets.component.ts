import { Component, OnInit } from "@angular/core";
import { Tweet } from "../model/tweet";

import { TweetsService } from "../Servicios/tweets.service";

@Component({
  selector: "app-lista-tweets",
  templateUrl: "./lista-tweets.component.html",
  styleUrls: ["./lista-tweets.component.css"]
})
export class ListaTweetsComponent implements OnInit {
  misTweets: Array<Tweet>;
  miTweet: Tweet;

  constructor(private twServicio: TweetsService) {
    this.misTweets = new Array();
    this.miTweet = new Tweet();

    twServicio.getAllTweets().subscribe(misTweetsObs => {
      this.misTweets = misTweetsObs;
    });
  }

  addNewTweet() {
    console.log("add tweet");
    this.twServicio.insertTweet(this.miTweet);
    //this.misTweets.push(this.miTweet);
    this.miTweet = new Tweet();
  }
  
  ngOnInit() {}
}
