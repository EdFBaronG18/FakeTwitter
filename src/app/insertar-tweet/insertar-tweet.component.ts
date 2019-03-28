import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../Servicios/tweets.service';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'app-insertar-tweet',
  templateUrl: './insertar-tweet.component.html',
  styleUrls: ['./insertar-tweet.component.css']
})
export class InsertarTweetComponent implements OnInit {
  miTweet: Tweet;

  constructor(private twServicio: TweetsService) {
    this.miTweet = new Tweet();
   }

  ngOnInit() {
  }


  addNewTweet() {
    console.log("add tweet");
    this.twServicio.insertTweet(this.miTweet);
    this.miTweet = new Tweet();

    
  }
}
