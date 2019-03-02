import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { Kilometro1Component } from './album/kilometro-1/kilometro-1.component';
import { ConstruyamosEsperanzaComponent } from './album/construyamos-esperanza/construyamos-esperanza.component';
import { MediaComponent } from './media/media.component';
import { OtrosComponent } from './album/otros/otros.component';
import { GaleriaComponent } from './media/galeria/galeria.component';
import { BiografiaComponent } from './biografia/biografia.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {pagina: 'Inicio'} },
  { path: 'albums', component: AlbumComponent, data: {pagina: 'Música'} },
  { path: 'biografia', component: BiografiaComponent, data: {pagina: 'Biografía'} },
  { path: 'albums/kilometro-1', component: Kilometro1Component, data: {pagina: 'Álbum - Kilómetro 1'} },
  { path: 'albums/construyamos-esperanza', component: ConstruyamosEsperanzaComponent, data: {pagina: 'Álbum - Construyamos Esperanza'} },
  { path: 'albums/otros', component: OtrosComponent, data: {pagina: 'Otros'} },
  { path: 'media', component: MediaComponent, data: {pagina: 'Media'} },
  { path: 'media/:id', component: GaleriaComponent, data: {pagina: 'Galería'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
