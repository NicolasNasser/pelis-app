import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './routes/peliculas/peliculas.component';
import { InicioComponent } from './routes/inicio/inicio.component';

const routes: Routes = [
  {
    path: "Inicio", component: InicioComponent
  },
  {
    path: "peliculas", component: PeliculasComponent
  },
  {
    path: "**",
    redirectTo: "Inicio"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }