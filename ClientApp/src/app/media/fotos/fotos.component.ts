import { Component, OnInit } from "@angular/core";
import { MediaService } from "../media.service";
import { Galeria } from "../galeria";

@Component({
    selector: 'app-fotos',
    templateUrl: './fotos.component.html',
    styleUrls: ['./fotos.component.css'],
    providers: [MediaService]
})
export class FotosComponent implements OnInit {
    galerias: Galeria[];

    constructor(private mediaService: MediaService) { }

    ngOnInit() {
        this.mediaService.getGalerias().subscribe((galeria) => {
            this.galerias = galeria;
        });
    }

}
