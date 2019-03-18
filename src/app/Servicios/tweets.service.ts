import { Injectable } from '@angular/core';
import { ALL_TWEETS } from '../model/data';
import { Tweet } from '../model/tweet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TweetsService {

  constructor() { }

  getAllTweets(): Observable<Tweet[]> {
    return of(ALL_TWEETS);
  }
}
