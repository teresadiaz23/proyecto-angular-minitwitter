import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './Menu/menu/menu.component';
import { InicioSesionComponent } from './Views/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './Views/registro-usuario/registro-usuario.component';
import { VisualizarTweetsComponent } from './Views/visualizar-tweets/visualizar-tweets.component';

const routes: Routes = [
  //{ path: '', component: MenuComponent},
  { path: 'login', component: InicioSesionComponent},
  { path: 'registro', component: RegistroUsuarioComponent},
  { path: 'tweets', component: VisualizarTweetsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
