import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { Kilometro1Component } from './album/kilometro-1/kilometro-1.component';
import { ConstruyamosEsperanzaComponent } from './album/construyamos-esperanza/construyamos-esperanza.component';
import { MediaComponent } from './media/media.component';
import { OtrosComponent } from './album/otros/otros.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: AlbumComponent },
  { path: 'albums/kilometro-1', component: Kilometro1Component },
  { path: 'albums/construyamos-esperanza', component: ConstruyamosEsperanzaComponent },
  { path: 'albums/otros', component: OtrosComponent },
  { path: 'media', component: MediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
