import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component';
import { ListaTweetsComponent } from './lista-tweets/lista-tweets.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSlideToggleModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



import { HttpClientModule, HttpClient} from "@angular/common/http";
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { InsertarTweetComponent } from './insertar-tweet/insertar-tweet.component';
import { LogInComponent } from './log-in/log-in.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NeedAuthGuard } from './NeedAuthGuard';
import {TranslateModule} from '@ngx-translate/core'
import {TranslateLoader} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CarlosPipe } from './pipes/carlos.pipe';
import { RootPipe } from './pipes/root.pipe';
import { PotPipe } from './pipes/pot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetalleTweetComponent,
    ListaTweetsComponent,
    DetalleUsuarioComponent,
    InsertarTweetComponent,
    LogInComponent,
    PerfilComponent,
    TestPipesComponent,
    CarlosPipe,
    RootPipe,
    PotPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader:{
        provide:    TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:       [HttpClient]
      }
    }),
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
 }
 