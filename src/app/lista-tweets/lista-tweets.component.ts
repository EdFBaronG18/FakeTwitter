import { Component, OnInit } from '@angular/core';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.css']
})
export class ListaTweetsComponent implements OnInit {

  misTweets: Array<Tweet>;
  miTweet: Tweet;

  constructor() { 

    this.misTweets = new Array ();
    this.miTweet = new Tweet();

    const tweet1 = {
      id: 1,
      texto: 'You know something is unusual when your code runsperfect at first time',
      autor: 'JustADevGuy'
      };

      const tweet2 = {
      id: 1,
      texto: 'You know something is unusual when your code runsperfect at first time',
      autor: 'JustADevGuy'
      };

      const tweet3 = {
      id: 1,
      texto: '1969: What are you doing with that 2KB of RAM? -sendingpeople to the moon',
      autor: 'AnotherDevGuy'
      };

      const tweet4 = {
      id: 1,
      texto: '2019: What are you doing with that 1.5GB of RAM? -Justchecking facebook',
      autor: 'AnotherDevGuy'
      };

      this.misTweets.push(tweet1);
      this.misTweets.push(tweet2);
      this.misTweets.push(tweet3);
      this.misTweets.push(tweet4);

  }


  addNewTweet (){
    this.misTweets.push(this.miTweet);
    }
   

  ngOnInit() {
  }

}
