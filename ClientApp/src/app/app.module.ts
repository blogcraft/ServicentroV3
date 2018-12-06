import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconModule, MatIconRegistry, MatExpansionModule, MatDialogModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatCardModule, MatGridListModule, MatTooltipModule, MatMenuModule, MatListModule, MatSnackBarModule } from '@angular/material';

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
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule
  ],
  entryComponents: [DialogFoto],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
