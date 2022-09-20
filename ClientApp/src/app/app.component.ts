import { Component } from '@angular/core';
import { faSoundcloud, faInstagram, faFacebook, faYoutube, faSpotify, faApple, faGooglePlay, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { OverlayContainer } from '@angular/cdk/overlay';

import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpdateService]
})
export class AppComponent {
  isDarktheme = true;

  faSoundcloud = faSoundcloud;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faSpotify = faSpotify;
  faApple = faApple;
  faGooglePlay = faGooglePlay;
  faTiktok = faTiktok;

  schema = {
    '@context': 'http://schema.org',
    '@id': 'kg:/g/11df0pfn6m',
    'name': 'Servicentro',
    '@type': [
      'Thing',
      'MusicGroup'
    ],
    'url': 'http://www.servicentro.cl',
    'image': 'http://www.servicentro.cl/images/ServicentroBanda.png',
    'logo': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Servicentro2.png',
    'sameAs': [
      'https://www.facebook.com/Servicentrocl',
      'https://twitter.com/Servicentro_cl',
      'https://www.instagram.com/servicentrocl/',
      'https://plus.google.com/108680490166455718892',
      'https://www.youtube.com/Servicentrocl',
      'https://es.wikipedia.org/wiki/Servicentro',
      'https://www.wikidata.org/wiki/Q29788531',
      'https://commons.wikimedia.org/wiki/Servicentro',
      'https://play.google.com/store/music/artist/Servicentro?id=Agn2sqnuqkok4jwqgc4lwloy3xm',
      'https://open.spotify.com/artist/3Saso3ghsK3PYSromArnYW',
      'https://www.deezer.com/artist/12473514',
      'https://itunes.apple.com/artist/servicentro/1237982586'
    ],
    'description': 'Somos un punto de encuentro en el camino, una banda, una experiencia de Rock. Detente un momento y escucha, celebra, ama y carga energías. Luego puedes continuar tu ruta, en tu maleta… hemos dejado un mensaje.',
    'potentialAction': {
      '@type': 'ListenAction',
      'target': [
        {
          '@type': 'EntryPoint',
          'urlTemplate': 'http://www.servicentro.cl/',
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/IOSPlatform',
            'http://schema.org/AndroidPlatform'
          ],
          'InLanguage': 'ES'
        }
      ],
      'expectsAcceptanceOf': {
        '@type': 'Offer',
        'eligibleRegion': []
      }
    }
  };

  constructor(private overlayContainer: OverlayContainer, private update: UpdateService) {
    this.setTheme();
  }
  setTheme() {
    if (!this.isDarktheme) {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    }
  }
  themeToggle() {
    this.isDarktheme = !this.isDarktheme;
    this.setTheme();
  }
}
