import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MediaComponent } from './media/media.component';
import { AlbumComponent } from './album/album.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Kilometro1Component } from './album/kilometro-1/kilometro-1.component';
import { ConstruyamosEsperanzaComponent } from './album/construyamos-esperanza/construyamos-esperanza.component';
import { OtrosComponent } from './album/otros/otros.component';
import { GaleriaComponent, DialogFoto } from './media/galeria/galeria.component';
import { FotosComponent } from './media/fotos/fotos.component';
import { VideosComponent, SafePipe } from './media/videos/videos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiografiaComponent } from './biografia/biografia.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    HomeComponent,
    AlbumComponent,
    Kilometro1Component,
    ConstruyamosEsperanzaComponent,
    OtrosComponent,
    FotosComponent,
    VideosComponent, SafePipe,
    GaleriaComponent,
    BiografiaComponent,
    DialogFoto,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    NgxJsonLdModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
