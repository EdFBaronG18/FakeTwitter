import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



import { HttpClientModule} from "@angular/common/http";
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { InsertarTweetComponent } from './insertar-tweet/insertar-tweet.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleTweetComponent,
    ListaTweetsComponent,
    DetalleUsuarioComponent,
    InsertarTweetComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
