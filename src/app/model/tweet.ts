export class Tweet {
  public idTweet      : number;
  public userTweet    : User;
  public contentTweet : String;
  public dateTweet    : String;
  public username     : String;
}

export class User{
  public id         : number;
  public username   : String;
  public name       : String;
  public email      : String;
  public cellphone  : number;
  
}
