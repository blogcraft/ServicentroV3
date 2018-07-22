import { Component } from "@angular/core";
import { faGooglePlusG, faInstagram, faFacebook, faYoutube, faSpotify, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    faGooglePlusG = faGooglePlusG;
    faInstagram = faInstagram
    faFacebook = faFacebook;
    faYoutube = faYoutube;
    faSpotify = faSpotify;
    faApple = faApple;
    faGooglePlay = faGooglePlay;  
}