import { Injectable } from "@angular/core";
import { Tweet } from "../model/tweet";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  constructor(private http: HttpClient) {}

  getAllTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(environment.urlConsultaTweets);
  }

  insertTweet(tweet: Tweet) {
    console.log("EL TWEET A INSERTAR:", tweet);
    const body = new HttpParams()
      .set("userId", tweet.idTweet + "")
      .set("content", tweet.contentTweet + "")
      .set("idCommentTweet", "");

    return this.http.post(environment.urlInsertaTweets, body).subscribe();
  }
}
