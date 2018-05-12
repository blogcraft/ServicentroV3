import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../media.service';
import { Galeria } from '../../galeria';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-galeria',
    templateUrl: './galeria.component.html',
    providers: [MediaService]
})
export class GaleriaComponent implements OnInit {
    galeria: Galeria;

    constructor(private mediaService: MediaService, private route: ActivatedRoute, private dialog: MatDialog) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.mediaService.getGalerias().subscribe((galerias) => {
            this.galeria = galerias.find(z => z.id == id);
        })
    }

    openDialog(id) {
        this.dialog.open(DialogFoto, {
            data: {
                galeria: this.galeria,
                foto: id
            }
        });
    }

}
@Component({
    selector: 'app-foto',
    templateUrl: 'dialogFoto.html',
})
export class DialogFoto {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
