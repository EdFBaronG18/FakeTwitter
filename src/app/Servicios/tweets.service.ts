import { Injectable } from "@angular/core";
import { Tweet, User } from "../model/tweet";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
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
      .set("username", tweet.username + "")
      .set("content", tweet.contentTweet + "")
      .set("idCommentTweet", "");

    return this.http.post(environment.urlInsertaTweets, body).subscribe();
  }

  /*
  getUserbyUsername(username: String) : Observable<User>{
    console.log(username);
    const op = {
      headers : new HttpHeaders({'username': username+''})
    };
    return this.http.get<User>(environment.urlGetUser, op);
  }
  */
}
