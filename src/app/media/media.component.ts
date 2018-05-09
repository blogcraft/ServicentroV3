import { Component, OnInit } from '@angular/core';
import { Galeria } from '../galeria';
import { MediaService } from './media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [MediaService]
})
export class MediaComponent implements OnInit {
  galerias: Galeria[];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getGalerias().subscribe((galeria) => {
      this.galerias = galeria;
    });
  }

}
