import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { InicioSesionComponent } from './Views/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './Views/registro-usuario/registro-usuario.component';
import { ListaTweetsComponent } from './Components/lista-tweets/lista-tweets.component';
import { VisualizarTweetsComponent } from './Views/visualizar-tweets/visualizar-tweets.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { AuthService } from './Services/auth.service';
import { RegistroService } from "./Services/registro.service";
import { TweetService } from "./Services/tweet.service";
import { CrearTweetComponent } from './Components/crear-tweet/crear-tweet.component';
import { CreateService } from "./Services/create.service";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, FormBuilder} from '@angular/forms';
import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    ListaTweetsComponent,
    VisualizarTweetsComponent,
    MenuComponent,
    CrearTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule
  ],
  providers: [AuthService, RegistroService, TweetService, CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
