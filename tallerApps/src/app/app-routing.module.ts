import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { LugaresComponent } from './lugares/lugares.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'pagina1', component: PersonajesComponent },
  { path: 'pagina2', component: EpisodiosComponent },
  { path: 'pagina3', component: LugaresComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
