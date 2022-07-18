import { Component } from '@angular/core';
import {
    faSoundcloud, faInstagram, faFacebook, faYoutube, faSpotify, faApple, faGooglePlay,
    faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsNd
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    faSoundcloud = faSoundcloud;
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faYoutube = faYoutube;
    faSpotify = faSpotify;
    faApple = faApple;
    faGooglePlay = faGooglePlay;
    faCreativeCommons = faCreativeCommons;
    faCreativeCommonsBy = faCreativeCommonsBy;
    faCreativeCommonsNc = faCreativeCommonsNc;
    faCreativeCommonsNd = faCreativeCommonsNd;

    anio = new Date().getFullYear();
}
