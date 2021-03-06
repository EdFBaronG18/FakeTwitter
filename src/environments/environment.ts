// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlConsultaTweets:  "http://localhost:8081/getAllTweets",
  urlInsertaTweets:   "http://localhost:8081/addTweetByUsername",
  urlGetUser:         "http://localhost:8081/getUserByUsername",
  urlAutenticate:     "http://localhost:8081/validatedUser",
  urlGetUserTweets:   "http://localhost:8081/getAllTweetByUsername"
};

/*
export const environment = {
  production: false,
  urlConsultaTweets:  "http://localhost:8080/getAllTweets",
  urlInsertaTweets:   "http://localhost:8080/addTweetByUsername",
  urlGetUser:         "http://localhost:8080/getUserByUsername",
  urlAutenticate:     "http://localhost:8080/validatedUser"
  urlGetUserTweets:   "http://localhost:8080/getAllTweetByUsername"
};
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
