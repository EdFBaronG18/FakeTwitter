import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { InsertarTweetComponent } from './insertar-tweet/insertar-tweet.component';

const routes: Routes = [
  {path: '', redirectTo :'/tweets', pathMatch: 'full'},
  {path: 'tweets', component: ListaTweetsComponent},
  {path: 'new-tweet', component: InsertarTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
