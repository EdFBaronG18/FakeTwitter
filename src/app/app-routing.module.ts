import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { InsertarTweetComponent } from './insertar-tweet/insertar-tweet.component';
import { LogInComponent } from './log-in/log-in.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NeedAuthGuard } from './NeedAuthGuard';

const routes: Routes = [
  {path: '', redirectTo :'/login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'profile', component: PerfilComponent,  canActivate: [NeedAuthGuard]},
  {path: 'tweets', component: ListaTweetsComponent,  canActivate: [NeedAuthGuard]},
  {path: 'new-tweet', component: InsertarTweetComponent,  canActivate: [NeedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
