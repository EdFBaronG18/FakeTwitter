import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { InsertarTweetComponent } from './insertar-tweet/insertar-tweet.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path: '', redirectTo :'/login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'tweets', component: ListaTweetsComponent},
  {path: 'new-tweet', component: InsertarTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
