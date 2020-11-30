import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTweetComponent } from './Components/crear-tweet/crear-tweet.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { InicioSesionComponent } from './Views/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './Views/registro-usuario/registro-usuario.component';
import { VisualizarTweetsComponent } from './Views/visualizar-tweets/visualizar-tweets.component';

const routes: Routes = [
  //{ path: '', component: MenuComponent},
  { path: 'login', component: InicioSesionComponent},
  { path: 'signup', component: RegistroUsuarioComponent},
  { path: 'tweets/all', component: VisualizarTweetsComponent},
  { path: 'tweets/create', component: CrearTweetComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
