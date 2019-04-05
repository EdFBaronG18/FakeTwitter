import { Component, OnInit, Input} from '@angular/core';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {


  @Input() mySelectedTweet: Tweet;

  constructor() {
   }

  ngOnInit() {
  }

  getDateString(): number{ 
    return this.mySelectedTweet.dateTweet.getDate();
  }
}
